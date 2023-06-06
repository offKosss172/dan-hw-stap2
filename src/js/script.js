const servicesWeb = document.getElementById('servicesWeb');
const servicesGraphic = document.getElementById('servicesGraphic');
const servicesSupport = document.getElementById('servicesSupport');
const servicesApp = document.getElementById('servicesApp');
const servicesMarketing = document.getElementById('servicesMarketing');
const servicesSeo = document.getElementById('servicesSeo');


const serviceImg = document.querySelector('.our-services__contant div span img');
const serviceText = document.querySelector('.our-services__contant div p');

servicesWeb.addEventListener('click', () => {
    serviceImg.setAttribute('src', '../dist/img/section/WebDesign.png');
    serviceText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
});

servicesGraphic.addEventListener('click', () => {
    serviceImg.setAttribute('src', '../dist/img/section/graphicdesign.jpg');
    serviceText.innerText = 'Our graphic design services cover a wide range of products – brochures, business cards, publications, mailers, posters and billboards – weve pretty much designed it all. With nearly 20 years of experience designing for print and the web, well help your business convert potential clients into paying customers with well designed, printed collateral.Some common projects we have worked on include:Brochures, rack cards & bookletsBusiness cards, letterhead & envelopesLogos and branded elementsPosters, banners and signageSocial media graphics & digital marketing adsEmail marketing graphics well help your business convert potential clients into paying customers with well designed, printed collateral.Some common projects we have worked on include:Brochures, well help your business convert potential clients into paying customers with well designed';
});

servicesSupport.addEventListener('click', () => {
    serviceImg.setAttribute('src', '../dist/img/section/onlinesupport.jpg');
    serviceText.innerText = 'In the Zendesk customer experience (CX) trends report, 60% of people said they wanted the option of multiple service channels to choose from. It’s no longer good enough to provide a support phone number and email address alone. People want and expect the ability to contact you via the channel of their choice. And in a Zendesk survey on the business impact of customer service, 24% of respondents said text messaging was their preferred channel for support. 27% said any time they weren’t able to use the channel of their choice, it caused a bad customer experience. Even if the portion of customers that prefer SMS above all other options is in the minority, they expect you to be there and will be disappointed if you’re not. For some business models, real-time updates are essential. For same-day orders, such as with food delivery services, such as with food delivery services, such as ';
});

servicesApp.addEventListener('click', () => {
    serviceImg.setAttribute('src', '../dist/img/section/appdesign.png');
    serviceText.innerText = 'Our App Design service is all about creating user-friendly, visually appealing, and functional mobile applications that meet your business needs. Our team of experienced designers and developers work closely with you to understand your requirements and goals for the app, and then craft a design thats tailored to your unique needs. Whether youre looking to build a new app from scratch or redesign an existing one, we have the skills and expertise to deliver exceptional results. We start by conducting thorough research into your target audience, competitor apps, and industry trends to gain a deep understanding of your market. This helps us create a user-friendly and intuitive app interface that appeals to your target audience. We also pay special attention to the apps usability, ensuring that its easy to navigate and use, regardless of the users level of technical expertise.';
});

servicesMarketing.addEventListener('click', () => {
    serviceImg.setAttribute('src', '../dist/img/section/onlinemarketing.png');
    serviceText.innerText = 'Marketing is an essential component of any business, big or small. It involves a variety of strategies and techniques aimed at promoting products or services, generating leads, and ultimately increasing sales. Effective marketing can help businesses gain a competitive edge in the market, reach a wider audience, and establish a strong brand identity. One of the key aspects of marketing is identifying and understanding the target audience. A business needs to know who its customers are, what they want, and how they behave. This information can then be used to create tailored marketing campaigns that resonate with the target audience and drive engagement. Marketing can take many forms, including advertising, public relations, content marketing, email marketing, and social media marketing. Marketing can take many forms ncluding advertising, public relations';
});

servicesSeo.addEventListener('click', () => {
    serviceImg.setAttribute('src', '../dist/img/section/seoservices.jpg');
    serviceText.innerText = 'SEO is a critical component of any successful online marketing strategy. With more and more businesses vying for visibility online, its more important than ever to optimize your website for search engines. SEO involves a variety of techniques, such as keyword research, on-page optimization, link building, and content creation, all aimed at improving your websites ranking on search engine results pages. Keyword research involves identifying the words and phrases that potential customers are searching for in relation to your business. By incorporating these keywords into your websites content, you can increase your chances of ranking higher in search results. On-page optimization includes elements such as title tags, meta descriptions';
});
















