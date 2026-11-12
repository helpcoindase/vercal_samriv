import Benefits from "./Benefits";
import Faq from "./Faq";
import HealingJourney from "./Healingjourney";
import IdealDuration from "./Idealduration";
import Overview from "./Overview";
import Quicklink from "./Quicklinks";
import StayDuration from "./StayDuration";
import SubBannerContent from "./SubBanContent";
import Therapy from "./Therapy";
import Wellness from "./Wellness";

const getSubban = (id: string) =>
     SubBannerContent.find((item) => item.id === id);
const getOverview = (id: string) =>
     Overview.find((item) => item.id === id);
const getBenefits = (id: string) =>
     Benefits.find((item) => item.id === id);
const getFaq = (id: string) =>
     Faq.find((item) => item.id === id);
const getWellness = (id: string) =>
     Wellness.find((item) => item.id === id);
const gettherapy = (id: string) =>
     Therapy.find((item) => item.id === id);
const getHealingJourney = (id: string) =>
     HealingJourney.find((item) => item.id === id);
const getIdealDuration = (id: string) =>
     IdealDuration.find((item) => item.id === id);
const getStayDuration = (id: string) =>
     StayDuration.find((item) => item.id === id);

const getQuicklink = (id: string) =>
     Quicklink.find((item) => item.id === id);




const Treatments = [
     {
          id: "panchakarma-treatment-in-kerala",
          title: 'Panchakarma Treatment',
          subban: getSubban('panchakarma-treatment-in-kerala'),
          quicklinks: getQuicklink('panchakarma-treatment-in-kerala'),
          Overview: getOverview('panchakarma-treatment-in-kerala'),

          wellness: getWellness('panchakarma-treatment-in-kerala'),
          therapy: gettherapy('panchakarma-treatment-in-kerala'),
          HealingJourney: getHealingJourney('panchakarma-treatment-in-kerala'),
          IdealDuration: getIdealDuration('panchakarma-treatment-in-kerala'),
          StayDuration: getStayDuration('panchakarma-treatment-in-kerala'),
          benefits: getBenefits('panchakarma-treatment-in-kerala'),
          faq: getFaq('panchakarma-treatment-in-kerala'),

     },


     {
          id: "best-ayurvedic-treatment-for-autism-in-kerala",
          title: 'Autism Treatment',
          subban: getSubban('best-ayurvedic-treatment-for-autism-in-kerala'),
          quicklinks: getQuicklink('best-ayurvedic-treatment-for-autism-in-kerala'),
          Overview: getOverview('best-ayurvedic-treatment-for-autism-in-kerala'),
          wellness: getWellness('best-ayurvedic-treatment-for-autism-in-kerala'),
          therapy: gettherapy('best-ayurvedic-treatment-for-autism-in-kerala'),
          HealingJourney: getHealingJourney('best-ayurvedic-treatment-for-autism-in-kerala'),
          IdealDuration: getIdealDuration('best-ayurvedic-treatment-for-autism-in-kerala'),
          StayDuration: getStayDuration('best-ayurvedic-treatment-for-autism-in-kerala'),
          benefits: getBenefits('best-ayurvedic-treatment-for-autism-in-kerala'),
          faq: getFaq('best-ayurvedic-treatment-for-autism-in-kerala'),

     },

    
     {
          id: "sinusitis-ayurvedic-treatment-in-kerala",
          title: 'Sinusitis Treatment',
          subban: getSubban('sinusitis-ayurvedic-treatment-in-kerala'),
          quicklinks: getQuicklink('sinusitis-ayurvedic-treatment-in-kerala'),
          Overview: getOverview('sinusitis-ayurvedic-treatment-in-kerala'),

          wellness: getWellness('sinusitis-ayurvedic-treatment-in-kerala'),
          therapy: gettherapy('sinusitis-ayurvedic-treatment-in-kerala'),
          HealingJourney: getHealingJourney('sinusitis-ayurvedic-treatment-in-kerala'),

          StayDuration: getStayDuration('sinusitis-ayurvedic-treatment-in-kerala'),
          benefits: getBenefits('sinusitis-ayurvedic-treatment-in-kerala'),
          faq: getFaq('sinusitis-ayurvedic-treatment-in-kerala'),

     },

     {
          id: "ayurvedic-treatment-for-varicose-veins-kerala",
          title: 'Varicose Veins',
          subban: getSubban('ayurvedic-treatment-for-varicose-veins-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-for-varicose-veins-kerala'),
          Overview: getOverview('ayurvedic-treatment-for-varicose-veins-kerala'),

          wellness: getWellness('ayurvedic-treatment-for-varicose-veins-kerala'),
          therapy: gettherapy('ayurvedic-treatment-for-varicose-veins-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-for-varicose-veins-kerala'),

          StayDuration: getStayDuration('ayurvedic-treatment-for-varicose-veins-kerala'),
          benefits: getBenefits('ayurvedic-treatment-for-varicose-veins-kerala'),
          faq: getFaq('ayurvedic-treatment-for-varicose-veins-kerala'),

     },

     {
          id: "parkinsons-ayurvedic-treatment-in-kerala",
          title: 'Parkinsons Disease',
          subban: getSubban('parkinsons-ayurvedic-treatment-in-kerala'),
          quicklinks: getQuicklink('parkinsons-ayurvedic-treatment-in-kerala'),
          Overview: getOverview('parkinsons-ayurvedic-treatment-in-kerala'),

          wellness: getWellness('parkinsons-ayurvedic-treatment-in-kerala'),
          therapy: gettherapy('parkinsons-ayurvedic-treatment-in-kerala'),
          HealingJourney: getHealingJourney('parkinsons-ayurvedic-treatment-in-kerala'),

          StayDuration: getStayDuration('parkinsons-ayurvedic-treatment-in-kerala'),
          benefits: getBenefits('parkinsons-ayurvedic-treatment-in-kerala'),
          faq: getFaq('parkinsons-ayurvedic-treatment-in-kerala'),

     },

     //ayurvedic-treatment-for-knee-pain-in-kerala
     {
          id: "ayurvedic-treatment-for-knee-pain-in-kerala",
          title: 'Knee Pain',
          subban: getSubban('ayurvedic-treatment-for-knee-pain-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-for-knee-pain-in-kerala'),
          Overview: getOverview('ayurvedic-treatment-for-knee-pain-in-kerala'),

          wellness: getWellness('ayurvedic-treatment-for-knee-pain-in-kerala'),
          therapy: gettherapy('ayurvedic-treatment-for-knee-pain-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-for-knee-pain-in-kerala'),

          StayDuration: getStayDuration('ayurvedic-treatment-for-knee-pain-in-kerala'),
          benefits: getBenefits('ayurvedic-treatment-for-knee-pain-in-kerala'),
          faq: getFaq('ayurvedic-treatment-for-knee-pain-in-kerala'),

     },

     //arthritis-ayurvedic-treatment-kerala
     {
          id: "arthritis-ayurvedic-treatment-kerala",
          title: 'Arthritis',
          subban: getSubban('arthritis-ayurvedic-treatment-kerala'),
          quicklinks: getQuicklink('arthritis-ayurvedic-treatment-kerala'),
          Overview: getOverview('arthritis-ayurvedic-treatment-kerala'),

          wellness: getWellness('arthritis-ayurvedic-treatment-kerala'),
          therapy: gettherapy('arthritis-ayurvedic-treatment-kerala'),
          HealingJourney: getHealingJourney('arthritis-ayurvedic-treatment-kerala'),

          StayDuration: getStayDuration('arthritis-ayurvedic-treatment-kerala'),
          benefits: getBenefits('arthritis-ayurvedic-treatment-kerala'),
          faq: getFaq('arthritis-ayurvedic-treatment-kerala'),

     },

     //ayurvedic-treatment-for-lower-back-pain-in-kerala
     {
          id: "ayurvedic-treatment-for-lower-back-pain-in-kerala",
          title: 'Lower Back Pain',
          subban: getSubban('ayurvedic-treatment-for-lower-back-pain-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-for-lower-back-pain-in-kerala'),
          Overview: getOverview('ayurvedic-treatment-for-lower-back-pain-in-kerala'),

          wellness: getWellness('ayurvedic-treatment-for-lower-back-pain-in-kerala'),
          therapy: gettherapy('ayurvedic-treatment-for-lower-back-pain-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-for-lower-back-pain-in-kerala'),

          StayDuration: getStayDuration('ayurvedic-treatment-for-lower-back-pain-in-kerala'),
          benefits: getBenefits('ayurvedic-treatment-for-lower-back-pain-in-kerala'),
          faq: getFaq('ayurvedic-treatment-for-lower-back-pain-in-kerala'),

     },


     //psoriasis-ayurvedic-treatment-in-kerala
     {
          id: "psoriasis-ayurvedic-treatment-in-kerala",
          title: 'Psoriasis',
          subban: getSubban('psoriasis-ayurvedic-treatment-in-kerala'),
          quicklinks: getQuicklink('psoriasis-ayurvedic-treatment-in-kerala'),
          Overview: getOverview('psoriasis-ayurvedic-treatment-in-kerala'),
          wellness: getWellness('psoriasis-ayurvedic-treatment-in-kerala'),
          therapy: gettherapy('psoriasis-ayurvedic-treatment-in-kerala'),
          HealingJourney: getHealingJourney('psoriasis-ayurvedic-treatment-in-kerala'),
          StayDuration: getStayDuration('psoriasis-ayurvedic-treatment-in-kerala'),
          benefits: getBenefits('psoriasis-ayurvedic-treatment-in-kerala'),
          faq: getFaq('psoriasis-ayurvedic-treatment-in-kerala'),
     },

     //post-natal-ayurvedic-treatment-in-kerala
     {
          id: "post-natal-ayurvedic-treatment-in-kerala",
          title: 'Postnatal',
          subban: getSubban('post-natal-ayurvedic-treatment-in-kerala'),
          quicklinks: getQuicklink('post-natal-ayurvedic-treatment-in-kerala'),
          Overview: getOverview('post-natal-ayurvedic-treatment-in-kerala'),
          wellness: getWellness('post-natal-ayurvedic-treatment-in-kerala'),
          therapy: gettherapy('post-natal-ayurvedic-treatment-in-kerala'),
          HealingJourney: getHealingJourney('post-natal-ayurvedic-treatment-in-kerala'),
          StayDuration: getStayDuration('post-natal-ayurvedic-treatment-in-kerala'),
          benefits: getBenefits('post-natal-ayurvedic-treatment-in-kerala'),
          faq: getFaq('post-natal-ayurvedic-treatment-in-kerala'),
     },
     //ayurvedic-treatment-disc-bulge-kerala
     {

          id: "ayurvedic-treatment-disc-bulge-kerala",
          title: 'Disc Bulge',
          subban: getSubban('ayurvedic-treatment-disc-bulge-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-disc-bulge-kerala'),
          Overview: getOverview('ayurvedic-treatment-disc-bulge-kerala'),
          wellness: getWellness('ayurvedic-treatment-disc-bulge-kerala'),
          therapy: gettherapy('ayurvedic-treatment-disc-bulge-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-disc-bulge-kerala'),
          StayDuration: getStayDuration('ayurvedic-treatment-disc-bulge-kerala'),
          benefits: getBenefits('ayurvedic-treatment-disc-bulge-kerala'),
          faq: getFaq('ayurvedic-treatment-disc-bulge-kerala'),
     },

 //weight-loss-ayurvedic-treatment-in-kerala
     {

          id: "weight-loss-ayurvedic-treatment-in-kerala",
          title: 'Weight Loss',
          subban: getSubban('weight-loss-ayurvedic-treatment-in-kerala'),
          quicklinks: getQuicklink('weight-loss-ayurvedic-treatment-in-kerala'),
          Overview: getOverview('weight-loss-ayurvedic-treatment-in-kerala'),
          wellness: getWellness('weight-loss-ayurvedic-treatment-in-kerala'),
          therapy: gettherapy('weight-loss-ayurvedic-treatment-in-kerala'),
          HealingJourney: getHealingJourney('weight-loss-ayurvedic-treatment-in-kerala'),
          StayDuration: getStayDuration('weight-loss-ayurvedic-treatment-in-kerala'),
          benefits: getBenefits('weight-loss-ayurvedic-treatment-in-kerala'),
          faq: getFaq('weight-loss-ayurvedic-treatment-in-kerala'),
     },

//ayurvedic-treatment-for-stress-in-kerala
     {

          id: "ayurvedic-treatment-for-stress-in-kerala",
          title: 'Stress Management',
          subban: getSubban('ayurvedic-treatment-for-stress-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-for-stress-in-kerala'),
          Overview: getOverview('ayurvedic-treatment-for-stress-in-kerala'),
          wellness: getWellness('ayurvedic-treatment-for-stress-in-kerala'),
          therapy: gettherapy('ayurvedic-treatment-for-stress-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-for-stress-in-kerala'),
          StayDuration: getStayDuration('ayurvedic-treatment-for-stress-in-kerala'),
          benefits: getBenefits('ayurvedic-treatment-for-stress-in-kerala'),
          faq: getFaq('ayurvedic-treatment-for-stress-in-kerala'),
     },

//ayurvedic-stroke-treatment-in-kerala
     {

          id: "ayurvedic-stroke-treatment-in-kerala",
          title: 'Stroke Treatment',
          subban: getSubban('ayurvedic-stroke-treatment-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-stroke-treatment-in-kerala'),
          Overview: getOverview('ayurvedic-stroke-treatment-in-kerala'),
          wellness: getWellness('ayurvedic-stroke-treatment-in-kerala'),
          therapy: gettherapy('ayurvedic-stroke-treatment-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-stroke-treatment-in-kerala'),
          StayDuration: getStayDuration('ayurvedic-stroke-treatment-in-kerala'),
          benefits: getBenefits('ayurvedic-stroke-treatment-in-kerala'),
          faq: getFaq('ayurvedic-stroke-treatment-in-kerala'),
     },
//ayurveda-monsoon-treatment-in-kerala
     {

          id: "ayurveda-monsoon-treatment-in-kerala",
          title: 'Monsoon Treatment',
          subban: getSubban('ayurveda-monsoon-treatment-in-kerala'),
          quicklinks: getQuicklink('ayurveda-monsoon-treatment-in-kerala'),
          Overview: getOverview('ayurveda-monsoon-treatment-in-kerala'),
          wellness: getWellness('ayurveda-monsoon-treatment-in-kerala'),
          therapy: gettherapy('ayurveda-monsoon-treatment-in-kerala'),
          HealingJourney: getHealingJourney('ayurveda-monsoon-treatment-in-kerala'),
          StayDuration: getStayDuration('ayurveda-monsoon-treatment-in-kerala'),
          benefits: getBenefits('ayurveda-monsoon-treatment-in-kerala'),
          faq: getFaq('ayurveda-monsoon-treatment-in-kerala'),
     },

//ayurvedic-treatment-for-sciatica-in-kerala
     {

          id: "ayurvedic-treatment-for-sciatica-in-kerala",
          title: 'Sciatica Treatment',
          subban: getSubban('ayurvedic-treatment-for-sciatica-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-for-sciatica-in-kerala'),
          Overview: getOverview('ayurvedic-treatment-for-sciatica-in-kerala'),
          wellness: getWellness('ayurvedic-treatment-for-sciatica-in-kerala'),
          therapy: gettherapy('ayurvedic-treatment-for-sciatica-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-for-sciatica-in-kerala'),
          StayDuration: getStayDuration('ayurvedic-treatment-for-sciatica-in-kerala'),
          benefits: getBenefits('ayurvedic-treatment-for-sciatica-in-kerala'),
          faq: getFaq('ayurvedic-treatment-for-sciatica-in-kerala'),
     },

//cervical-spondylosis-treatment-kerala
     {

          id: "cervical-spondylosis-treatment-kerala",
          title: 'Cervical Spondylosis Treatment',
          subban: getSubban('cervical-spondylosis-treatment-kerala'),
          quicklinks: getQuicklink('cervical-spondylosis-treatment-kerala'),
          Overview: getOverview('cervical-spondylosis-treatment-kerala'),
          wellness: getWellness('cervical-spondylosis-treatment-kerala'),
          therapy: gettherapy('cervical-spondylosis-treatment-kerala'),
          HealingJourney: getHealingJourney('cervical-spondylosis-treatment-kerala'),
          StayDuration: getStayDuration('cervical-spondylosis-treatment-kerala'),
          benefits: getBenefits('cervical-spondylosis-treatment-kerala'),
          faq: getFaq('cervical-spondylosis-treatment-kerala'),
     },

//lumbar-spondylosis-ayurvedic-treatment-in-kerala
     {

          id: "lumbar-spondylosis-ayurvedic-treatment-in-kerala",
          title: 'Lumbar Spondylosis Treatment',
          subban: getSubban('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          quicklinks: getQuicklink('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          Overview: getOverview('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          wellness: getWellness('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          therapy: gettherapy('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          HealingJourney: getHealingJourney('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          StayDuration: getStayDuration('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          benefits: getBenefits('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
          faq: getFaq('lumbar-spondylosis-ayurvedic-treatment-in-kerala'),
     },

//ulcerative-colitis-treatment-kerala
     {

          id: "ulcerative-colitis-treatment-kerala",
          title: 'Ulcerative Colitis Treatment',
          subban: getSubban('ulcerative-colitis-treatment-kerala'),
          quicklinks: getQuicklink('ulcerative-colitis-treatment-kerala'),
          Overview: getOverview('ulcerative-colitis-treatment-kerala'),
          wellness: getWellness('ulcerative-colitis-treatment-kerala'),
          therapy: gettherapy('ulcerative-colitis-treatment-kerala'),
          HealingJourney: getHealingJourney('ulcerative-colitis-treatment-kerala'),
          StayDuration: getStayDuration('ulcerative-colitis-treatment-kerala'),
          benefits: getBenefits('ulcerative-colitis-treatment-kerala'),
          faq: getFaq('ulcerative-colitis-treatment-kerala'),
     },

//ayurvedic-treatment-for-hair-loss-in-kerala
     {

          id: "ayurvedic-treatment-for-hair-loss-in-kerala",
          title: 'Hair Loss Treatment',
          subban: getSubban('ayurvedic-treatment-for-hair-loss-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-for-hair-loss-in-kerala'),
          Overview: getOverview('ayurvedic-treatment-for-hair-loss-in-kerala'),
          wellness: getWellness('ayurvedic-treatment-for-hair-loss-in-kerala'),
          therapy: gettherapy('ayurvedic-treatment-for-hair-loss-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-for-hair-loss-in-kerala'),
          StayDuration: getStayDuration('ayurvedic-treatment-for-hair-loss-in-kerala'),
          benefits: getBenefits('ayurvedic-treatment-for-hair-loss-in-kerala'),
          faq: getFaq('ayurvedic-treatment-for-hair-loss-in-kerala'),
     },

//gastroesophageal-reflux-disease-treatment-in-kerala
     {

          id: "gastroesophageal-reflux-disease-treatment-in-kerala",
          title: 'Gastroesophageal Reflux Disease Treatment',
          subban: getSubban('gastroesophageal-reflux-disease-treatment-in-kerala'),
          quicklinks: getQuicklink('gastroesophageal-reflux-disease-treatment-in-kerala'),
          Overview: getOverview('gastroesophageal-reflux-disease-treatment-in-kerala'),
          wellness: getWellness('gastroesophageal-reflux-disease-treatment-in-kerala'),
          therapy: gettherapy('gastroesophageal-reflux-disease-treatment-in-kerala'),
          HealingJourney: getHealingJourney('gastroesophageal-reflux-disease-treatment-in-kerala'),
          StayDuration: getStayDuration('gastroesophageal-reflux-disease-treatment-in-kerala'),
          benefits: getBenefits('gastroesophageal-reflux-disease-treatment-in-kerala'),
          faq: getFaq('gastroesophageal-reflux-disease-treatment-in-kerala'),
     },

//ayurvedic-treatment-for-menstrual-pain-in-kerala
     {

          id: "ayurvedic-treatment-for-menstrual-pain-in-kerala",
          title: 'Dysmenorrhea Treatment',
          subban: getSubban('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          Overview: getOverview('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          wellness: getWellness('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          therapy: gettherapy('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          StayDuration: getStayDuration('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          benefits: getBenefits('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
          faq: getFaq('ayurvedic-treatment-for-menstrual-pain-in-kerala'),
     },


     //ayurvedic-treatment-in-kerala
     {
         id: "ayurvedic-treatment-in-kerala",
          title: 'Ayurveda Treatment',
          subban: getSubban('ayurvedic-treatment-in-kerala'),
          quicklinks: getQuicklink('ayurvedic-treatment-in-kerala'),
          Overview: getOverview('ayurvedic-treatment-in-kerala'),
          wellness: getWellness('ayurvedic-treatment-in-kerala'),
          therapy: gettherapy('ayurvedic-treatment-in-kerala'),
          HealingJourney: getHealingJourney('ayurvedic-treatment-in-kerala'),
          StayDuration: getStayDuration('ayurvedic-treatment-in-kerala'),
          benefits: getBenefits('ayurvedic-treatment-in-kerala'),
          faq: getFaq('ayurvedic-treatment-in-kerala'),

     },

]

export default Treatments