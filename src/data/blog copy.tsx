import { ASSET_PREFIX } from "config";

export interface AccordionItem {
    id: number;
    heading: string;
    content: string;
    category?: string;
}

export interface BlogItem {
    id: string;
    slug: string;
    title: string;
    date: string;
    image: string;
    content: string | React.ReactNode;
    content2?: string | React.ReactNode;
    Contenttype: 'normal' | 'jsx';
    Contenttype2?: 'normal' | 'jsx';
    accordion?: AccordionItem[];
    href: string;
    category?: string;
}

export const BLOGS: BlogItem[] = [
    {
        id: '1',
        slug: 'modern-design-trends',
        title: 'Modern Design Trends Shaping 2024',
        date: 'March 15, 2024',
        image: `${ASSET_PREFIX}images/blog1.webp`,
        Contenttype: 'normal',
        content: <>
            <p className="mb-[20px]">Modern design has continuously evolved to meet the needs and desires of contemporary society. In 2024, we're witnessing a remarkable shift in how designers approach aesthetics, functionality, and sustainability. The fusion of technology with traditional craftsmanship is creating spaces that are not only beautiful but also incredibly functional.</p>

            <p className="mb-[20px]">One of the most significant trends is the rise of biophilic design-bringing nature into our built environments. From living walls to natural light optimization, designers are recognizing the profound impact of nature on human well-being. Another major trend is the embrace of bold, saturated colors and dramatic patterns that challenge the minimalist norm.</p>

            <p className="mb-[20px]">Contemporary design is increasingly conscious of environmental impact. Reclaimed materials, low-VOC finishes, and energy-efficient solutions are no longer afterthoughts-they're central to modern design philosophy. Designers are finding creative ways to incorporate sustainable practices without compromising on aesthetic appeal.</p>
            <ul>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>Research institutions worldwide are collaborating </span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>The impact extends beyond just technological improvements.</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span> Industry experts are hailing this development as a game-changer that will</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>A major breakthrough has occurred in the technology sector that promises</span></li>
            </ul>
        </>,
        accordion: [
            {
                id: 1,
                heading: 'What defines modern design?',
                content: 'Modern design is characterized by clean lines, functional minimalism, and the integration of technology with aesthetics. It emphasizes form following function while creating visually appealing and sustainable spaces.'
            },
            {
                id: 2,
                heading: 'How can I incorporate biophilic design at home?',
                content: 'You can add indoor plants, maximize natural light, use natural materials like wood and stone, and create views to nature. Consider living walls, water features, or simply ensuring ample plants throughout your space.'
            },
            {
                id: 3,
                heading: 'Are bold colors in modern design here to stay?',
                content: 'Bold colors are becoming increasingly popular as designers move away from all-neutral palettes. However, the key is balance-using bold accent colors against neutral backgrounds for maximum impact and timelessness.'
            },
            {
                id: 4,
                heading: 'How do I make my space sustainable?',
                content: 'Choose eco-friendly materials, opt for energy-efficient lighting and appliances, use recycled or reclaimed items, and focus on quality over quantity. Sustainable design is about making thoughtful choices that benefit both your space and the environment.'
            }
        ],
        content2: 'Smart home technology is seamlessly integrated into modern interiors. From automated lighting systems to temperature control, technology is becoming invisible while improving our daily lives. The challenge for designers is to incorporate these elements without letting them dominate the visual landscape. Gone are the days of one-size-fits-all design solutions. Modern design celebrates individuality and personal expression.',
        Contenttype2: 'normal',
        href: '/modern-design-trends'
    },
    {
        id: '2',
        slug: 'sustainable-architecture',
        title: 'Sustainable Architecture: Building for Tomorrow',
        date: 'March 10, 2024',
        image: `${ASSET_PREFIX}images/blog2.webp`,
        Contenttype: 'normal',
        content: `Climate change and environmental degradation have made sustainable architecture not just a nice-to-have, but an absolute necessity. The built environment accounts for nearly 40% of global carbon emissions, making this sector crucial for addressing climate change. Sustainable architecture represents a fundamental shift in how we design and construct buildings.

Sustainable architecture is built on several core principles: energy efficiency, water conservation, material sustainability, indoor air quality, and site considerations. These principles work together to create buildings that minimize environmental impact while maximizing occupant well-being.

Modern sustainable architecture utilizes innovative materials such as recycled steel, bamboo, cork, and low-impact concrete. Building methods have evolved to include passive design strategies, green roofs, and rainwater harvesting systems. These solutions demonstrate that sustainability doesn't require sacrificing quality or aesthetics.`,
        accordion: [
            {
                id: 1,
                heading: 'What are the key principles of sustainable architecture?',
                content: 'The main principles include energy efficiency, water conservation, sustainable material selection, indoor air quality, and site-specific design. Each principle works together to create buildings that are environmentally responsible and occupy-friendly.'
            },
            {
                id: 2,
                heading: 'Can sustainable building be cost-effective?',
                content: 'While initial costs may be higher, sustainable buildings save money through reduced operating costs, lower energy bills, and decreased water consumption. Over a building\'s lifetime, sustainable design typically proves more economical.'
            },
            {
                id: 3,
                heading: 'What materials are considered sustainable?',
                content: 'Sustainable materials include recycled steel, bamboo, cork, reclaimed wood, low-impact concrete, and rapidly renewable resources. The key is choosing materials with minimal environmental impact throughout their lifecycle.'
            }
        ],
        content2: 'Buildings that incorporate sustainable practices report reduced operating costs, improved occupant health, and greater resilience to environmental challenges. Studies show that employees working in green buildings experience higher productivity and lower absenteeism. The future of architecture is undeniably sustainable.',
        Contenttype2: 'normal',
        href: '/sustainable-architecture'
    },
    {
        id: '3',
        slug: 'interior-color-psychology',
        title: 'The Psychology of Color in Interior Design',
        date: 'March 5, 2024',
        image: `${ASSET_PREFIX}images/blog3.webp`,
        Contenttype: 'normal',
        content: `Color psychology is the study of how colors affect human emotions, behavior, and well-being. In interior design, this knowledge is crucial for creating spaces that not only look beautiful but also make people feel the way the designer intends. Colors have profound impacts on our moods, energy levels, and even productivity.

Warm colors like reds, oranges, and yellows evoke feelings of warmth, energy, and comfort. These colors are ideal for gathering spaces like living rooms and dining areas where you want to encourage social interaction. However, too much warm color in a bedroom might be overstimulating.

Blues, greens, and purples create a sense of calm, relaxation, and tranquility. These colors are excellent for bedrooms, bathrooms, and home offices where focus and relaxation are priorities. The cooling effect of these colors can make a space feel larger and more peaceful.`,
        accordion: [
            {
                id: 1,
                heading: 'How do warm colors affect a space?',
                content: 'Warm colors (red, orange, yellow) create energy, warmth, and intimacy. They\'re perfect for social spaces and can make large rooms feel cozier. However, they can be overstimulating in restful areas.'
            },
            {
                id: 2,
                heading: 'What are the best colors for a bedroom?',
                content: 'Cool colors like soft blues, greens, and lavenders are ideal for bedrooms as they promote relaxation and sleep. Avoid overly bright or saturated colors that might be stimulating before bedtime.'
            },
            {
                id: 3,
                heading: 'Can color psychology vary by culture?',
                content: 'Yes, different cultures associate different meanings with colors. For example, white symbolizes purity in Western cultures but can represent mourning in some Eastern cultures. Always consider cultural context in design choices.'
            }
        ],
        href: '/interior-color-psychology'
    },
    {
        id: '4',
        slug: 'minimalist-spaces',
        title: 'Creating Minimalist Spaces That Feel Spacious',
        date: 'February 28, 2024',
        image: `${ASSET_PREFIX}images/blog1.webp`,
        Contenttype: 'normal',
        content: `Minimalism is not about having nothing-it's about having only what matters. This philosophy, when applied to interior design, creates serene, uncluttered spaces that are both functional and beautiful. Minimalist design challenges us to be intentional about every piece we bring into our living spaces.

Successful minimalist spaces share common principles: clean lines, neutral color palettes, open spaces, and purposeful minimalism. Every element should earn its place in the space through function or aesthetic contribution. Storage is hidden or integrated seamlessly to maintain clean lines.

Minimalist design naturally makes spaces feel larger. By reducing visual clutter and using vertical space efficiently, you can create an illusion of spaciousness. Light colors, strategic lighting, and reflective surfaces amplify this effect. The removal of unnecessary items directly translates to a more open, airy feeling.`,
        accordion: [
            {
                id: 1,
                heading: 'How do I start decluttering my space?',
                content: 'Begin by sorting items into categories: keep, donate, and discard. Ask yourself if each item is useful or brings you joy. Adopt a "one in, one out" policy for new purchases to maintain minimalism.'
            },
            {
                id: 2,
                heading: 'What are the best neutral colors for minimalism?',
                content: 'Colors like white, cream, beige, gray, and soft blacks work well for minimalist spaces. These neutrals create a calm backdrop and allow functional pieces to stand out.'
            }
        ],
        href: '/minimalist-spaces'
    },
    {
        id: '5',
        slug: 'workspace-design',
        title: 'Designing the Perfect Home Office',
        date: 'February 22, 2024',
        image: `${ASSET_PREFIX}images/blog2.webp`,
        Contenttype: 'normal',
        content: `A well-designed home office can significantly impact productivity, creativity, and work satisfaction. Unlike a traditional office, your home office needs to balance professionalism with comfort while maintaining clear boundaries between work and living spaces. The design of this space directly affects your ability to focus and perform.

Proper ergonomics is non-negotiable in workspace design. Your desk should be at elbow height, your monitor at eye level, and your chair should provide adequate support. A poorly designed workspace leads to physical strain, fatigue, and reduced productivity. Investing in ergonomic furniture is investing in your long-term health.

Adequate lighting is crucial for concentration and reducing eye strain. Combine natural light (if available) with task lighting focused on your work area. Avoid harsh overhead lighting that can cause glare on screens. Consider color temperature-cooler light encourages focus, while warmer light is more relaxing.`,
        accordion: [
            {
                id: 1,
                heading: 'What is the ideal desk height?',
                content: 'Your desk should be at approximately elbow height when sitting. This usually means about 28-30 inches from the floor. Your monitor should be at eye level, about an arm\'s length away.'
            },
            {
                id: 2,
                heading: 'How can I improve lighting in my home office?',
                content: 'Use a combination of natural light, ambient lighting, and task lighting. Position your desk near a window if possible, add a desk lamp for focused lighting, and avoid harsh overhead lights.'
            },
            {
                id: 3,
                heading: 'What storage solutions work best for home offices?',
                content: 'Vertical storage, wall-mounted shelves, filing cabinets, and built-in closets keep items organized and out of sight. A clutter-free space promotes better focus and productivity.'
            }
        ],
        href: '/workspace-design'
    },
    {
        id: '6',
        slug: 'luxury-interior-design',
        title: 'Luxury Interior Design: Elegance and Sophistication',
        date: 'February 15, 2024',
        image: `${ASSET_PREFIX}images/blog3.webp`,
        Contenttype: 'normal',
        content: `Luxury interior design transcends mere aesthetics-it's about creating curated experiences that reflect refined taste and elevated living. Luxury design combines exquisite materials, masterful craftsmanship, impeccable attention to detail, and timeless elegance. It's not about ostentation but about quality, exclusivity, and sophistication.

Luxury design is characterized by the use of premium materials: marble, precious metals, fine woods, and bespoke fabrics. These materials are chosen not just for their beauty but for their durability and the prestige they confer. The combination of materials should feel intentional and harmonious.

In luxury design, craftsmanship is paramount. Custom-made furniture, hand-finished details, and bespoke solutions create uniqueness. Every element is designed to perfection, with careful attention to proportions, finishes, and functionality. This level of detail transforms a space from good to extraordinary.`,
        accordion: [
            {
                id: 1,
                heading: 'What materials define luxury design?',
                content: 'Premium materials include marble, granite, exotic woods, precious metals like brass and gold, high-end fabrics, and handcrafted elements. These materials are selected for their beauty, durability, and exclusivity.'
            },
            {
                id: 2,
                heading: 'How does luxury design stay timeless?',
                content: 'Luxury design avoids trends in favor of classic, sophisticated aesthetics. It uses timeless color palettes, quality craftsmanship, and timeless proportions that remain beautiful and relevant for decades.'
            }
        ],
        href: '/luxury-interior-design'
    },
    {
        id: '1',
        slug: 'modern-design-trends',
        title: 'Modern Design Trends Shaping 2024',
        date: 'March 15, 2024',
        image: `${ASSET_PREFIX}images/blog1.webp`,
        Contenttype: 'normal',
        content: <>
            <p className="mb-[20px]">Modern design has continuously evolved to meet the needs and desires of contemporary society. In 2024, we're witnessing a remarkable shift in how designers approach aesthetics, functionality, and sustainability. The fusion of technology with traditional craftsmanship is creating spaces that are not only beautiful but also incredibly functional.</p>

            <p className="mb-[20px]">One of the most significant trends is the rise of biophilic design-bringing nature into our built environments. From living walls to natural light optimization, designers are recognizing the profound impact of nature on human well-being. Another major trend is the embrace of bold, saturated colors and dramatic patterns that challenge the minimalist norm.</p>

            <p className="mb-[20px]">Contemporary design is increasingly conscious of environmental impact. Reclaimed materials, low-VOC finishes, and energy-efficient solutions are no longer afterthoughts-they're central to modern design philosophy. Designers are finding creative ways to incorporate sustainable practices without compromising on aesthetic appeal.</p>
            <ul>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>Research institutions worldwide are collaborating </span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>The impact extends beyond just technological improvements.</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span> Industry experts are hailing this development as a game-changer that will</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>A major breakthrough has occurred in the technology sector that promises</span></li>
            </ul>
        </>,
        accordion: [
            {
                id: 1,
                heading: 'What defines modern design?',
                content: 'Modern design is characterized by clean lines, functional minimalism, and the integration of technology with aesthetics. It emphasizes form following function while creating visually appealing and sustainable spaces.'
            },
            {
                id: 2,
                heading: 'How can I incorporate biophilic design at home?',
                content: 'You can add indoor plants, maximize natural light, use natural materials like wood and stone, and create views to nature. Consider living walls, water features, or simply ensuring ample plants throughout your space.'
            },
            {
                id: 3,
                heading: 'Are bold colors in modern design here to stay?',
                content: 'Bold colors are becoming increasingly popular as designers move away from all-neutral palettes. However, the key is balance-using bold accent colors against neutral backgrounds for maximum impact and timelessness.'
            },
            {
                id: 4,
                heading: 'How do I make my space sustainable?',
                content: 'Choose eco-friendly materials, opt for energy-efficient lighting and appliances, use recycled or reclaimed items, and focus on quality over quantity. Sustainable design is about making thoughtful choices that benefit both your space and the environment.'
            }
        ],
        content2: 'Smart home technology is seamlessly integrated into modern interiors. From automated lighting systems to temperature control, technology is becoming invisible while improving our daily lives. The challenge for designers is to incorporate these elements without letting them dominate the visual landscape. Gone are the days of one-size-fits-all design solutions. Modern design celebrates individuality and personal expression.',
        Contenttype2: 'normal',
        href: '/modern-design-trends'
    },
    {
        id: '2',
        slug: 'sustainable-architecture',
        title: 'Sustainable Architecture: Building for Tomorrow',
        date: 'March 10, 2024',
        image: `${ASSET_PREFIX}images/blog2.webp`,
        Contenttype: 'normal',
        content: `Climate change and environmental degradation have made sustainable architecture not just a nice-to-have, but an absolute necessity. The built environment accounts for nearly 40% of global carbon emissions, making this sector crucial for addressing climate change. Sustainable architecture represents a fundamental shift in how we design and construct buildings.

Sustainable architecture is built on several core principles: energy efficiency, water conservation, material sustainability, indoor air quality, and site considerations. These principles work together to create buildings that minimize environmental impact while maximizing occupant well-being.

Modern sustainable architecture utilizes innovative materials such as recycled steel, bamboo, cork, and low-impact concrete. Building methods have evolved to include passive design strategies, green roofs, and rainwater harvesting systems. These solutions demonstrate that sustainability doesn't require sacrificing quality or aesthetics.`,
        accordion: [
            {
                id: 1,
                heading: 'What are the key principles of sustainable architecture?',
                content: 'The main principles include energy efficiency, water conservation, sustainable material selection, indoor air quality, and site-specific design. Each principle works together to create buildings that are environmentally responsible and occupy-friendly.'
            },
            {
                id: 2,
                heading: 'Can sustainable building be cost-effective?',
                content: 'While initial costs may be higher, sustainable buildings save money through reduced operating costs, lower energy bills, and decreased water consumption. Over a building\'s lifetime, sustainable design typically proves more economical.'
            },
            {
                id: 3,
                heading: 'What materials are considered sustainable?',
                content: 'Sustainable materials include recycled steel, bamboo, cork, reclaimed wood, low-impact concrete, and rapidly renewable resources. The key is choosing materials with minimal environmental impact throughout their lifecycle.'
            }
        ],
        content2: 'Buildings that incorporate sustainable practices report reduced operating costs, improved occupant health, and greater resilience to environmental challenges. Studies show that employees working in green buildings experience higher productivity and lower absenteeism. The future of architecture is undeniably sustainable.',
        Contenttype2: 'normal',
        href: '/sustainable-architecture'
    },
    {
        id: '3',
        slug: 'interior-color-psychology',
        title: 'The Psychology of Color in Interior Design 2',
        date: 'March 5, 2024',
        image: `${ASSET_PREFIX}images/blog3.webp`,
        Contenttype: 'normal',
        content: `Color psychology is the study of how colors affect human emotions, behavior, and well-being. In interior design, this knowledge is crucial for creating spaces that not only look beautiful but also make people feel the way the designer intends. Colors have profound impacts on our moods, energy levels, and even productivity.

Warm colors like reds, oranges, and yellows evoke feelings of warmth, energy, and comfort. These colors are ideal for gathering spaces like living rooms and dining areas where you want to encourage social interaction. However, too much warm color in a bedroom might be overstimulating.

Blues, greens, and purples create a sense of calm, relaxation, and tranquility. These colors are excellent for bedrooms, bathrooms, and home offices where focus and relaxation are priorities. The cooling effect of these colors can make a space feel larger and more peaceful.`,
        accordion: [
            {
                id: 1,
                heading: 'How do warm colors affect a space?',
                content: 'Warm colors (red, orange, yellow) create energy, warmth, and intimacy. They\'re perfect for social spaces and can make large rooms feel cozier. However, they can be overstimulating in restful areas.'
            },
            {
                id: 2,
                heading: 'What are the best colors for a bedroom?',
                content: 'Cool colors like soft blues, greens, and lavenders are ideal for bedrooms as they promote relaxation and sleep. Avoid overly bright or saturated colors that might be stimulating before bedtime.'
            },
            {
                id: 3,
                heading: 'Can color psychology vary by culture?',
                content: 'Yes, different cultures associate different meanings with colors. For example, white symbolizes purity in Western cultures but can represent mourning in some Eastern cultures. Always consider cultural context in design choices.'
            }
        ],
        href: '/interior-color-psychology'
    },
    {
        id: '4',
        slug: 'minimalist-spaces',
        title: 'Creating Minimalist Spaces That Feel Spacious 2',
        date: 'February 28, 2024',
        image: `${ASSET_PREFIX}images/blog1.webp`,
        Contenttype: 'normal',
        content: `Minimalism is not about having nothing-it's about having only what matters. This philosophy, when applied to interior design, creates serene, uncluttered spaces that are both functional and beautiful. Minimalist design challenges us to be intentional about every piece we bring into our living spaces.

Successful minimalist spaces share common principles: clean lines, neutral color palettes, open spaces, and purposeful minimalism. Every element should earn its place in the space through function or aesthetic contribution. Storage is hidden or integrated seamlessly to maintain clean lines.

Minimalist design naturally makes spaces feel larger. By reducing visual clutter and using vertical space efficiently, you can create an illusion of spaciousness. Light colors, strategic lighting, and reflective surfaces amplify this effect. The removal of unnecessary items directly translates to a more open, airy feeling.`,
        accordion: [
            {
                id: 1,
                heading: 'How do I start decluttering my space?',
                content: 'Begin by sorting items into categories: keep, donate, and discard. Ask yourself if each item is useful or brings you joy. Adopt a "one in, one out" policy for new purchases to maintain minimalism.'
            },
            {
                id: 2,
                heading: 'What are the best neutral colors for minimalism?',
                content: 'Colors like white, cream, beige, gray, and soft blacks work well for minimalist spaces. These neutrals create a calm backdrop and allow functional pieces to stand out.'
            }
        ],
        href: '/minimalist-spaces'
    },
    {
        id: '5',
        slug: 'workspace-design',
        title: 'Designing the Perfect Home Office 2',
        date: 'February 22, 2024',
        image: `${ASSET_PREFIX}images/blog2.webp`,
        Contenttype: 'normal',
        content: `A well-designed home office can significantly impact productivity, creativity, and work satisfaction. Unlike a traditional office, your home office needs to balance professionalism with comfort while maintaining clear boundaries between work and living spaces. The design of this space directly affects your ability to focus and perform.

Proper ergonomics is non-negotiable in workspace design. Your desk should be at elbow height, your monitor at eye level, and your chair should provide adequate support. A poorly designed workspace leads to physical strain, fatigue, and reduced productivity. Investing in ergonomic furniture is investing in your long-term health.

Adequate lighting is crucial for concentration and reducing eye strain. Combine natural light (if available) with task lighting focused on your work area. Avoid harsh overhead lighting that can cause glare on screens. Consider color temperature-cooler light encourages focus, while warmer light is more relaxing.`,
        accordion: [
            {
                id: 1,
                heading: 'What is the ideal desk height?',
                content: 'Your desk should be at approximately elbow height when sitting. This usually means about 28-30 inches from the floor. Your monitor should be at eye level, about an arm\'s length away.'
            },
            {
                id: 2,
                heading: 'How can I improve lighting in my home office?',
                content: 'Use a combination of natural light, ambient lighting, and task lighting. Position your desk near a window if possible, add a desk lamp for focused lighting, and avoid harsh overhead lights.'
            },
            {
                id: 3,
                heading: 'What storage solutions work best for home offices?',
                content: 'Vertical storage, wall-mounted shelves, filing cabinets, and built-in closets keep items organized and out of sight. A clutter-free space promotes better focus and productivity.'
            }
        ],
        href: '/workspace-design'
    },
    {
        id: '6',
        slug: 'luxury-interior-design',
        title: 'Luxury Interior Design: Elegance and Sophistication 2',
        date: 'February 15, 2024',
        image: `${ASSET_PREFIX}images/blog3.webp`,
        Contenttype: 'normal',
        content: `Luxury interior design transcends mere aesthetics-it's about creating curated experiences that reflect refined taste and elevated living. Luxury design combines exquisite materials, masterful craftsmanship, impeccable attention to detail, and timeless elegance. It's not about ostentation but about quality, exclusivity, and sophistication.

Luxury design is characterized by the use of premium materials: marble, precious metals, fine woods, and bespoke fabrics. These materials are chosen not just for their beauty but for their durability and the prestige they confer. The combination of materials should feel intentional and harmonious.

In luxury design, craftsmanship is paramount. Custom-made furniture, hand-finished details, and bespoke solutions create uniqueness. Every element is designed to perfection, with careful attention to proportions, finishes, and functionality. This level of detail transforms a space from good to extraordinary.`,
        accordion: [
            {
                id: 1,
                heading: 'What materials define luxury design?',
                content: 'Premium materials include marble, granite, exotic woods, precious metals like brass and gold, high-end fabrics, and handcrafted elements. These materials are selected for their beauty, durability, and exclusivity.'
            },
            {
                id: 2,
                heading: 'How does luxury design stay timeless?',
                content: 'Luxury design avoids trends in favor of classic, sophisticated aesthetics. It uses timeless color palettes, quality craftsmanship, and timeless proportions that remain beautiful and relevant for decades.'
            }
        ],
        href: '/luxury-interior-design'
    }
];
