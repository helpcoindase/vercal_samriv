"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  getMobileError,
  computeMobileValue,
  getPhoneKeydownOverride,
  type PhoneCountry,
} from "@/lib/validatePhone";
import { submitEnquiry } from "@/lib/submitEnquiry";

// declare module "react-google-recaptcha" {
//   import * as React from "react";

//   interface ReCAPTCHAProps {
//     sitekey: string;
//     onChange?: (value: string | null) => void;
//     onExpired?: () => void;
//     theme?: "light" | "dark";
//     size?: "compact" | "normal" | "invisible";
//     tabindex?: number;
//     hl?: string;
//     badge?: "bottomright" | "bottomleft" | "inline";
//     className?: string;
//   }

//   const ReCAPTCHA: React.ComponentType<ReCAPTCHAProps>;

//   export default ReCAPTCHA;
// }

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const countryNameCache = new Map<string, string>();
const regionNames =
  typeof Intl !== "undefined" && "DisplayNames" in Intl
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

/** Full country name for the ISO 3166-1 alpha-2 code the phone country
 * dropdown reports (e.g. "in" -> "India"), so the backend still receives a
 * `country` value without a separate country field in the UI. */
function getCountryName(countryCode: string): string {
  const iso = (countryCode || "").toUpperCase();
  if (!iso) return "";
  if (countryNameCache.has(iso)) {
    return countryNameCache.get(iso)!;
  }
  const name = regionNames?.of(iso) ?? iso;
  countryNameCache.set(iso, name);
  return name;
}

// ------------ Types ------------
interface FormDataState {
  website: string;
  useragent: string;
  starttime: string;
  enquiry_date: string;
  enquiry_month: string;
  enquiry_time: string;
  ipaddress: string;
}

interface FormFieldsState {
  checkvalue: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  treatment: string;
  message: string;
}

// ------------ Component ------------
const TreatmentForm: React.FC = () => {
  const isRecaptchaEnabled =
    process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA !== "false";
  const [formData, setFormData] = useState<FormDataState>({
    website: "",
    useragent: "",
    starttime: "",
    enquiry_date: "",
    enquiry_month: "",
    enquiry_time: "",
    ipaddress: "",
  });

  const [formFields, setFormFields] = useState<FormFieldsState>({
    checkvalue: "",
    name: "",
    email: "",
    phone: "",
    country: "India",
    city: "",
    treatment: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const prevCountryRef = useRef<PhoneCountry | null>(null);
  const siteKey = "6LfVpJ8sAAAAAPxi-iq9XZju7qg7rUbSs0RQqCGq";

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();

        const now = new Date();
        const optionsDate: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        };
        const optionsTime: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };

        const enquiry_date = new Intl.DateTimeFormat("en-GB", optionsDate)
          .format(now)
          .split("/")
          .join("-");
        const enquiry_time = new Intl.DateTimeFormat(
          "en-IN",
          optionsTime,
        ).format(now);

        const pad = (n: number) => String(n).padStart(2, "0");
        const starttime = `${now.getFullYear()}-${pad(
          now.getMonth() + 1,
        )}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(
          now.getMinutes(),
        )}:${pad(now.getSeconds())}`;

        const dateParts = enquiry_date.split("-");
        let enquiry_month = "";
        if (dateParts.length === 3) {
          enquiry_month = `${dateParts[1]}-${dateParts[2]}`;
        }

        setFormData({
          website: "www.samwarthikarivera.com",
          useragent: navigator.userAgent,
          starttime,
          enquiry_date,
          enquiry_time,
          enquiry_month,
          ipaddress: data.ip,
        });
      } catch (err) {
        console.error("Failed to fetch IP:", err);
      }
    };

    fetchIp();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneValidationError = getMobileError(
      formFields.phone,
      prevCountryRef.current,
    );
    if (phoneValidationError) {
      setPhoneTouched(true);
      setPhoneError(phoneValidationError);
      return;
    }

    if (isRecaptchaEnabled && !captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    setIsLoading(true);
    const fullData = {
      ...formFields,
      ...formData,
      "g-recaptcha-response": captchaValue, // if backend uses this
    };

    try {
      await submitEnquiry(
        Object.fromEntries(
          Object.entries(fullData).map(([key, value]) => [
            key,
            String(value ?? ""),
          ]),
        ),
      );
      window.location.href = "/thanks";
    } catch (error) {
      console.error("Form submission failed:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Network error occurred. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" ">
      <div className="">
        <div className=" max-sm:mt-0 lg:!ml-0 my-[25px] mx-[15px] xsm:m-[25px] md:m-[50px_40px] mlg:m-[90px_60px] grid grid-cols-1 justify-between  max-xxl:w-[100%] max-lg:grid-cols-1 max-lg:gap-[5px] max-md:gap-[35px] ">
          {/* Left big form card */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#fff] p-[0px_20px] pb-[20px] max-sm:pt-[20px] rounded-[25px] lg:rounded-l-[0px] lg:rounded-r-[30px] ">
            
            <div className="sm:my-[20px]">
              <div className="grid grid-cols-2 gap-[30px] max-xl:gap-[20px] max-sm:grid-cols-1">
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formFields.name}
                      onChange={handleChange}
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#31423B] placeholder-[#80847b]"
                      placeholder="Name*"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formFields.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#31423B] placeholder-[#80847b]"
                      placeholder="Email*"
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      pattern="[A-Za-z\s]+"
                      name="city"
                      value={formFields.city}
                      onChange={handleChange}
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#31423B] placeholder-[#80847b]"
                      placeholder="City*"
                      required
                    />
                  </div>

                  <div>
                    <div className="relative">
                      <select
                        className="w-full appearance-none border-b border-gray-400 px-3 py-3 focus:outline-none text-[#31423B]  focus:border-[#304A10] truncate"
                        name="treatment"
                        aria-label="Select Treatments"
                        value={formFields.treatment}
                        onChange={handleChange}
                        required>
                        <option value="" disabled className="text-[#80847b]">
                          Treatments*
                        </option>
                        <option value="Ayurveda Treatment">
                          Ayurveda Treatment
                        </option>
                        <option value="Panchakarma Treatment">
                          Panchakarma Treatment
                        </option>
                        <option value="Sinusitis Treatment">
                          Sinusitis Treatment
                        </option>
                        <option value="Autism Treatment">
                          Autism Treatment
                        </option>
                        <option value="Weight Loss Treatment">
                          Weight Loss Treatment
                        </option>
                        <option value="Monsoon Treatment">
                          Monsoon Treatment
                        </option>
                        <option value="Parkinsons Ayurvedic Treatment">
                          Parkinsons Ayurvedic Treatment
                        </option>
                        <option value="Sciatica Treatment">
                          Sciatica Treatment
                        </option>
                        <option value="Stroke Treatment">
                          Stroke Treatment
                        </option>
                        <option value="Varicose Veins Treatment">
                          Varicose Veins Treatment
                        </option>
                        <option value="Knee Pain Treatment">
                          Knee Pain Treatment
                        </option>
                        <option value="PostNatal Treatment">
                          PostNatal Treatment
                        </option>
                        <option value="Cervical Spondylosis Treatment">
                          Cervical Spondylosis Treatment
                        </option>
                        <option value="Psoriasis Ayurvedic Treatment">
                          Psoriasis Ayurvedic Treatment
                        </option>
                        <option value="Lumbar Spondylosis Treatment">
                          Lumbar Spondylosis Treatment
                        </option>
                        <option value="Gastroesophageal Reflux Disease Treatment">
                          Gastroesophageal Reflux Disease Treatment
                        </option>
                        <option value="Arthritis Treatment">
                          Arthritis Treatment
                        </option>
                        <option value="Dysmenorrhea Treatment">
                          Dysmenorrhea Treatment
                        </option>
                        <option value="Ulcerative Colitis Treatment">
                          Ulcerative Colitis Treatment
                        </option>
                        <option value="Disc Bulge Protrusion">
                          Disc Bulge Protrusion
                        </option>
                        <option value="Lower Back Pain">Lower Back Pain</option>
                        <option value="Stress Management">
                          Stress Management
                        </option>
                        <option value="Hair Loss Treatment">
                          Hair Loss Treatment
                        </option>
                      </select>

                      {/* Dropdown arrow */}
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <PhoneInput
                  country="in"
                  value={formFields.phone || ""}
                  onChange={(value: string, country: CountryData) => {
                    const {
                      formattedValue,
                      dialCode,
                      countryCode,
                      format,
                      countryChanged,
                    } = computeMobileValue(
                      value,
                      country,
                      prevCountryRef.current,
                    );
                    prevCountryRef.current = { dialCode, countryCode, format };

                    setFormFields((prev) => ({
                      ...prev,
                      phone: formattedValue,
                      country: getCountryName(countryCode),
                    }));

                    if (countryChanged) {
                      setPhoneTouched(false);
                      setPhoneError("");
                    } else if (phoneTouched) {
                      setPhoneError(getMobileError(formattedValue, prevCountryRef.current));
                    }
                  }}
                  onBlur={() => {
                    setPhoneTouched(true);
                    setPhoneError(getMobileError(formFields.phone, prevCountryRef.current));
                  }}
                  placeholder="Phone No*"
                  inputProps={{
                    name: "phone",
                    required: true,
                    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
                      const override = getPhoneKeydownOverride(
                        e.currentTarget,
                        e.key,
                        formFields.phone,
                        prevCountryRef.current,
                      );
                      if (!override) return;
                      e.preventDefault();

                      if (override === "block") return;

                      const dialCode = prevCountryRef.current?.dialCode || "91";
                      const formattedValue = `+${dialCode} ${override.digit}`;

                      setFormFields((prev) => ({
                        ...prev,
                        phone: formattedValue,
                        country: getCountryName(
                          prevCountryRef.current?.countryCode || "in",
                        ),
                      }));

                      if (phoneTouched) {
                        setPhoneError(getMobileError(formattedValue, prevCountryRef.current));
                      }
                    },
                  }}
                  containerClass="w-full"
                  inputClass="!w-full !h-auto !border-0 !border-b !border-gray-400 !bg-transparent !outline-none !pl-[54px] !pr-3 !py-3 focus:!border-[#304A10] !text-[16px] !text-[#31423B] !rounded-none !font-[inherit]"
                  buttonClass="!bg-transparent !border-0 !border-b !border-gray-400 !rounded-none"
                  dropdownClass="!text-[#000]"
                  searchClass="!text-[#000]"
                  enableSearch
                  countryCodeEditable={false}
                  {...({ separateDialCode: true } as Record<string, unknown>)}
                />
                {phoneTouched && phoneError ? (
                  <p className="mt-1 text-[13px] leading-[16px] text-red-600">
                    {phoneError}
                  </p>
                ) : null}
              </div>

              <div>
                <div className="relative mt-5">
                  <textarea
                    className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#31423B] placeholder-[#80847b] resize-none"
                    name="message"
                    rows={2}
                    cols={2}
                    placeholder="Message*"
                    value={formFields.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-[20px] flex-wrap items-center">
              {/* <p className="text-[16px] leading-[23px] text-[#80847b]"> By clicking the &quot;Submit&quot; button, I agree and accept <br /> the <Link href={"/privacy-policy"} className="underline"> privacy policy </Link> of Samwarthika. </p> */}

              {isRecaptchaEnabled && (
                <div className="g-captcha scale-70 sm:scale-80 origin-left">
                  <ReCAPTCHA
                    sitekey={siteKey}
                    onChange={handleCaptchaChange}
                    onExpired={() => setCaptchaValue(null)}
                  />
                </div>
              )}

              <button
                type="submit"
                className="2xl:mr-[20px] text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px]   bg-[#c25400]   py-[8px] h-[fit-content] px-[20px] 2xl:px-[30px]   rounded-[50px]  text-center items-center   transition duration-300 uppercase text-[#fff] font-semibold hover:bg-[#175e42] hover:text-[#fff] cursor-pointer"
                disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default TreatmentForm;
