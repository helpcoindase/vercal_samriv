import { ASSET_PREFIX } from "config";
import { ReactNode } from "react";

export type NewsItem = {
    id: number;
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    content: string | ReactNode;
    author?: string;
};

export const NEWS: NewsItem[] = [
    {
        id: 1,
        slug: 'revolutionary-tech-breakthrough',
        title: 'Revolutionary Technology Breakthrough Changes Industry',
        date: 'March 15, 2024',
        category: 'Technology',
        excerpt: 'A groundbreaking innovation has emerged that is set to transform the way we approach digital solutions and business operations.',
        image: `${ASSET_PREFIX}/images/blog1.webp`,
        content: <>
            <p className="mb-[20px]">A major breakthrough has occurred in the technology sector that promises to revolutionize how businesses operate. This innovation brings together cutting-edge research and practical applications that were previously thought to be years away.</p>

            <p className="mb-[20px]"> Industry experts are hailing this development as a game-changer that will set new standards for the entire sector. Companies are already beginning to integrate this technology into their operations, with early results showing significant improvements in efficiency and performance.</p>

            <p className="mb-[20px]">The impact extends beyond just technological improvements. This breakthrough has economic implications that could reshape market dynamics and create new opportunities for businesses of all sizes. Startups and established enterprises alike are positioning themselves to capitalize on this shift.</p>

            <p className="mb-[20px]"> Research institutions worldwide are collaborating to further develop and refine this technology. The collaborative approach is expected to accelerate adoption and drive continuous improvements. Funding has already been secured for multiple research initiatives aimed at pushing the boundaries even further.</p>

            <ul>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>Research institutions worldwide are collaborating </span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>The impact extends beyond just technological improvements.</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span> Industry experts are hailing this development as a game-changer that will</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>A major breakthrough has occurred in the technology sector that promises</span></li>
            </ul>
        </>,
        author: 'Sarah Johnson'
    },
    {
        id: 2,
        slug: 'sustainable-business-practices-2024',
        title: 'Sustainable Business Practices Become Industry Standard',
        date: 'March 12, 2024',
        category: 'Business',
        excerpt: 'Companies worldwide are adopting sustainable practices as consumer demand for eco-friendly solutions continues to grow.',
        image: `${ASSET_PREFIX}images/blog2.webp`,
        content: `The business landscape is undergoing a significant transformation as sustainability moves from a niche concern to a core business strategy. Companies across industries are recognizing that sustainable practices are not just good for the environment-they are essential for long-term profitability and competitiveness.

Environmental responsibility has become a key factor in consumer purchasing decisions. Companies that embrace sustainable practices are seeing increased customer loyalty and brand reputation improvements. Investment firms are also prioritizing companies with strong environmental, social, and governance (ESG) practices.

The transition to sustainable operations requires significant investment in new technologies and process improvements. However, companies that have made this transition report lower operating costs, increased employee satisfaction, and improved investor relations. The initial investment often pays for itself within a few years through operational efficiencies.

Global regulations are becoming stricter regarding environmental standards, making sustainable practices not just advisable but necessary for compliance. Forward-thinking companies are getting ahead of these regulatory changes by implementing sustainable practices now, giving them a competitive advantage as regulations tighten.`,
        author: 'Michael Chen'
    },
    {
        id: 3,
        slug: 'ai-integration-workplace',
        title: 'How AI is Transforming the Modern Workplace',
        date: 'March 10, 2024',
        category: 'Technology',
        excerpt: 'Artificial Intelligence is reshaping work environments, automating routine tasks and enabling employees to.',
        image: `${ASSET_PREFIX}/images/blog3.webp`,
        content: `Artificial Intelligence has moved beyond theoretical applications and is now actively transforming workplaces worldwide.Organizations are implementing AI - powered tools that automate routine tasks, analyze complex data sets, and provide insights that were previously unavailable.

The integration of AI in the workplace is creating new job categories while transforming existing ones.While some routine positions may be automated, new roles focused on AI management, data analysis, and human - AI collaboration are emerging.Companies are investing heavily in training programs to prepare their workforce for this transition.

Employee productivity has increased significantly in organizations that have successfully implemented AI tools.These tools handle repetitive administrative tasks, freeing employees to focus on creative problem - solving, strategic planning, and customer relationships.The psychological benefit of eliminating tedious tasks also leads to improved employee satisfaction.

The future workplace will be characterized by human - AI collaboration, where both strengths are leveraged.Humans bring creativity, emotional intelligence, and strategic thinking, while AI brings processing power, pattern recognition, and tireless execution.Organizations that master this collaboration will have significant competitive advantages.`,
        author: 'Emma Rodriguez'
    },
    {
        id: 4,
        slug: 'market-trends-q1-2024',
        title: 'Q1 2024 Market Trends: What You Need to Know',
        date: 'March 8, 2024',
        category: 'Business',
        excerpt: 'A comprehensive overview of the major market trends shaping Q1 2024 and their implications for businesses.',
        image: `${ASSET_PREFIX}/images/blog2.webp`,
        content: `The first quarter of 2024 has revealed several significant market trends that are reshaping the business landscape. These trends reflect broader economic shifts and changing consumer behaviors that will likely continue to influence markets throughout the year.

Digital transformation remains at the top of business priorities. Companies are accelerating their digital initiatives, recognizing that digital capabilities are essential for competitiveness. Cloud adoption, data analytics, and cybersecurity investments are at record levels as organizations modernize their infrastructure.

Consumer behavior continues to shift toward online channels and personalized experiences. Businesses that can effectively leverage data to provide personalized customer experiences are gaining market share. The integration of online and offline channels is becoming increasingly important for retailers and service providers.

Market consolidation is occurring in several key sectors as larger players acquire smaller competitors and innovative startups. This trend is driven by the need to achieve scale, acquire new technologies, and expand capabilities. Smaller companies that develop unique innovations are becoming acquisition targets for larger corporations.

Despite economic uncertainties, investment in innovation and new technologies remains strong. Venture capital funding, while more selective than in previous years, continues to flow toward promising startups and innovative initiatives.`,
        author: 'David Park'
    },
    {
        id: 5,
        slug: 'cybersecurity-threats-2024',
        title: 'Critical Cybersecurity Threats to Watch in 2024',
        date: 'March 5, 2024',
        category: 'Technology',
        excerpt: 'Security experts outline the most pressing cybersecurity threats organizations should prepare for this year.',
        image: `${ASSET_PREFIX}/images/blog3.webp`,
        content: `As digital threats evolve, organizations face increasingly sophisticated cybersecurity challenges.Security experts have identified several critical threats that require immediate attention and comprehensive security strategies.

Ransomware attacks have become more sophisticated and targeted, with attackers focusing on organizations with high - value data and critical infrastructure.These attacks not only encrypt data but often involve extortion attempts and data theft.Organizations need robust backup systems and incident response plans to mitigate these threats.

Cloud security vulnerabilities continue to pose significant risks.As organizations migrate more operations to cloud infrastructure, misconfigurations and inadequate access controls can expose sensitive data.Proper cloud security governance and regular audits are essential.

Human error remains the weakest link in cybersecurity defenses.Phishing attacks, social engineering, and credential misuse account for a significant portion of successful breaches.Comprehensive security awareness training and multi - factor authentication are essential components of any security strategy.

        Zero - trust security models are becoming the industry standard.Rather than trusting anyone with access, organizations are implementing systems that verify every access attempt.This approach significantly reduces the risk of successful attacks by limiting lateral movement in case of a breach.

Organizations that invest in comprehensive cybersecurity strategies, including technology, processes, and people, are best positioned to defend against evolving threats.`,
        author: 'Lisa Wong'
    },
    {
        id: 6,
        slug: 'remote-work-productivity-insights',
        title: 'Remote Work Productivity: New Insights and Best Practices',
        date: 'March 1, 2024',
        category: 'Business',
        excerpt: 'Research reveals surprising findings about remote work productivity and strategies for optimizing distributed teams.',
        image: `${ASSET_PREFIX}/images/blog1.webp`,
        content: `Recent research on remote work has provided valuable insights into how distributed teams can maximize productivity and maintain organizational culture. These findings challenge some common assumptions and provide practical guidance for organizations managing remote or hybrid workforces.

Flexibility in work arrangements has become a key factor in employee retention and satisfaction. Organizations that offer flexible work options are seeing improved employee morale and reduced turnover. However, flexibility must be balanced with collaboration needs and organizational culture maintenance.

Communication tools and processes are critical to remote work success. Organizations with clear communication protocols and appropriate tool selection report higher productivity and better team cohesion. Regular synchronous communication and clear documentation of asynchronous communication are essential.

Managing team culture in distributed environments requires intentional effort. Companies that maintain strong cultures despite distributed teams focus on clear values, regular team interactions, and opportunities for informal communication. Periodic in-person gatherings also play an important role.

Performance management approaches need to shift from activity monitoring to outcome-based metrics. Trusting employees and measuring results rather than hours worked leads to better productivity and higher job satisfaction. However, clear expectations and regular feedback remain essential.

The future of work will likely be hybrid for many organizations, combining the flexibility of remote work with the collaboration benefits of in-person interactions. Organizations that can effectively balance these elements will attract and retain top talent.`,
        author: 'James Mitchell'
    },
    {
        id: 7,
        slug: 'revolutionary-tech-breakthrough',
        title: 'Revolutionary Technology Breakthrough Changes Industry',
        date: 'March 15, 2024',
        category: 'Technology',
        excerpt: 'A groundbreaking innovation has emerged that is set to transform the way we approach digital solutions and business operations.',
        image: `${ASSET_PREFIX}/images/blog1.webp`,
        content: <>
            <p className="mb-[20px]">A major breakthrough has occurred in the technology sector that promises to revolutionize how businesses operate. This innovation brings together cutting-edge research and practical applications that were previously thought to be years away.</p>

            <p className="mb-[20px]"> Industry experts are hailing this development as a game-changer that will set new standards for the entire sector. Companies are already beginning to integrate this technology into their operations, with early results showing significant improvements in efficiency and performance.</p>

            <p className="mb-[20px]">The impact extends beyond just technological improvements. This breakthrough has economic implications that could reshape market dynamics and create new opportunities for businesses of all sizes. Startups and established enterprises alike are positioning themselves to capitalize on this shift.</p>

            <p className="mb-[20px]"> Research institutions worldwide are collaborating to further develop and refine this technology. The collaborative approach is expected to accelerate adoption and drive continuous improvements. Funding has already been secured for multiple research initiatives aimed at pushing the boundaries even further.</p>

            <ul>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>Research institutions worldwide are collaborating </span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>The impact extends beyond just technological improvements.</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span> Industry experts are hailing this development as a game-changer that will</span></li>
                <li className="grid grid-cols-[5px_auto] items-center gap-[10px] my-[10px]"><span className="h-[5px] w-[5px] rounded-[50%] bg-[#C8370B]"></span><span>A major breakthrough has occurred in the technology sector that promises</span></li>
            </ul>
        </>,
        author: 'Sarah Johnson'
    },
    {
        id: 8,
        slug: 'sustainable-business-practices-2024',
        title: 'Sustainable Business Practices Become Industry Standard',
        date: 'March 12, 2024',
        category: 'Business',
        excerpt: 'Companies worldwide are adopting sustainable practices as consumer demand for eco-friendly solutions continues to grow.',
        image: `${ASSET_PREFIX}/images/blog2.webp`,
        content: `The business landscape is undergoing a significant transformation as sustainability moves from a niche concern to a core business strategy. Companies across industries are recognizing that sustainable practices are not just good for the environment-they are essential for long-term profitability and competitiveness.

Environmental responsibility has become a key factor in consumer purchasing decisions. Companies that embrace sustainable practices are seeing increased customer loyalty and brand reputation improvements. Investment firms are also prioritizing companies with strong environmental, social, and governance (ESG) practices.

The transition to sustainable operations requires significant investment in new technologies and process improvements. However, companies that have made this transition report lower operating costs, increased employee satisfaction, and improved investor relations. The initial investment often pays for itself within a few years through operational efficiencies.

Global regulations are becoming stricter regarding environmental standards, making sustainable practices not just advisable but necessary for compliance. Forward-thinking companies are getting ahead of these regulatory changes by implementing sustainable practices now, giving them a competitive advantage as regulations tighten.`,
        author: 'Michael Chen'
    },
    {
        id: 9,
        slug: 'ai-integration-workplace',
        title: 'How AI is Transforming the Modern Workplace',
        date: 'March 10, 2024',
        category: 'Technology',
        excerpt: 'Artificial Intelligence is reshaping work environments, automating routine tasks and enabling employees to.',
        image: `${ASSET_PREFIX}/images/blog3.webp`,
        content: `Artificial Intelligence has moved beyond theoretical applications and is now actively transforming workplaces worldwide.Organizations are implementing AI - powered tools that automate routine tasks, analyze complex data sets, and provide insights that were previously unavailable.

The integration of AI in the workplace is creating new job categories while transforming existing ones.While some routine positions may be automated, new roles focused on AI management, data analysis, and human - AI collaboration are emerging.Companies are investing heavily in training programs to prepare their workforce for this transition.

Employee productivity has increased significantly in organizations that have successfully implemented AI tools.These tools handle repetitive administrative tasks, freeing employees to focus on creative problem - solving, strategic planning, and customer relationships.The psychological benefit of eliminating tedious tasks also leads to improved employee satisfaction.

The future workplace will be characterized by human - AI collaboration, where both strengths are leveraged.Humans bring creativity, emotional intelligence, and strategic thinking, while AI brings processing power, pattern recognition, and tireless execution.Organizations that master this collaboration will have significant competitive advantages.`,
        author: 'Emma Rodriguez'
    },
    {
        id: 10,
        slug: 'market-trends-q1-2024',
        title: 'Q1 2024 Market Trends: What You Need to Know',
        date: 'March 8, 2024',
        category: 'Business',
        excerpt: 'A comprehensive overview of the major market trends shaping Q1 2024 and their implications for businesses.',
        image: `${ASSET_PREFIX}/images/blog2.webp`,
        content: `The first quarter of 2024 has revealed several significant market trends that are reshaping the business landscape. These trends reflect broader economic shifts and changing consumer behaviors that will likely continue to influence markets throughout the year.

Digital transformation remains at the top of business priorities. Companies are accelerating their digital initiatives, recognizing that digital capabilities are essential for competitiveness. Cloud adoption, data analytics, and cybersecurity investments are at record levels as organizations modernize their infrastructure.

Consumer behavior continues to shift toward online channels and personalized experiences. Businesses that can effectively leverage data to provide personalized customer experiences are gaining market share. The integration of online and offline channels is becoming increasingly important for retailers and service providers.

Market consolidation is occurring in several key sectors as larger players acquire smaller competitors and innovative startups. This trend is driven by the need to achieve scale, acquire new technologies, and expand capabilities. Smaller companies that develop unique innovations are becoming acquisition targets for larger corporations.

Despite economic uncertainties, investment in innovation and new technologies remains strong. Venture capital funding, while more selective than in previous years, continues to flow toward promising startups and innovative initiatives.`,
        author: 'David Park'
    },
    {
        id: 11,
        slug: 'cybersecurity-threats-2024',
        title: 'Critical Cybersecurity Threats to Watch in 2024',
        date: 'March 5, 2024',
        category: 'Technology',
        excerpt: 'Security experts outline the most pressing cybersecurity threats organizations should prepare for this year.',
        image: `${ASSET_PREFIX}/images/blog3.webp`,
        content: `As digital threats evolve, organizations face increasingly sophisticated cybersecurity challenges.Security experts have identified several critical threats that require immediate attention and comprehensive security strategies.

Ransomware attacks have become more sophisticated and targeted, with attackers focusing on organizations with high - value data and critical infrastructure.These attacks not only encrypt data but often involve extortion attempts and data theft.Organizations need robust backup systems and incident response plans to mitigate these threats.

Cloud security vulnerabilities continue to pose significant risks.As organizations migrate more operations to cloud infrastructure, misconfigurations and inadequate access controls can expose sensitive data.Proper cloud security governance and regular audits are essential.

Human error remains the weakest link in cybersecurity defenses.Phishing attacks, social engineering, and credential misuse account for a significant portion of successful breaches.Comprehensive security awareness training and multi - factor authentication are essential components of any security strategy.

        Zero - trust security models are becoming the industry standard.Rather than trusting anyone with access, organizations are implementing systems that verify every access attempt.This approach significantly reduces the risk of successful attacks by limiting lateral movement in case of a breach.

Organizations that invest in comprehensive cybersecurity strategies, including technology, processes, and people, are best positioned to defend against evolving threats.`,
        author: 'Lisa Wong'
    },
    {
        id: 12,
        slug: 'remote-work-productivity-insights',
        title: 'Remote Work Productivity: New Insights and Best Practices',
        date: 'March 1, 2024',
        category: 'Business',
        excerpt: 'Research reveals surprising findings about remote work productivity and strategies for optimizing distributed teams.',
        image: `${ASSET_PREFIX}/images/blog1.webp`,
        content: `Recent research on remote work has provided valuable insights into how distributed teams can maximize productivity and maintain organizational culture. These findings challenge some common assumptions and provide practical guidance for organizations managing remote or hybrid workforces.

Flexibility in work arrangements has become a key factor in employee retention and satisfaction. Organizations that offer flexible work options are seeing improved employee morale and reduced turnover. However, flexibility must be balanced with collaboration needs and organizational culture maintenance.

Communication tools and processes are critical to remote work success. Organizations with clear communication protocols and appropriate tool selection report higher productivity and better team cohesion. Regular synchronous communication and clear documentation of asynchronous communication are essential.

Managing team culture in distributed environments requires intentional effort. Companies that maintain strong cultures despite distributed teams focus on clear values, regular team interactions, and opportunities for informal communication. Periodic in-person gatherings also play an important role.

Performance management approaches need to shift from activity monitoring to outcome-based metrics. Trusting employees and measuring results rather than hours worked leads to better productivity and higher job satisfaction. However, clear expectations and regular feedback remain essential.

The future of work will likely be hybrid for many organizations, combining the flexibility of remote work with the collaboration benefits of in-person interactions. Organizations that can effectively balance these elements will attract and retain top talent.`,
        author: 'James Mitchell'
    }
];

export const NEWS_CATEGORIES = ['All', 'Technology', 'Business'];
