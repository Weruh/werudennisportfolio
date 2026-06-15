export default function Services() {
    const services = [
        {
            name: 'Web development',
            icon: './assets/web-icon.png',
            description: 'Build the user-facing parts of websites and applications (what you see and interact with).',
            link: '#',
        },
        {
            name: 'Mobile app',
            icon: './assets/mobile-icon.png',
            description: 'Create applications for iOS or Android devices.',
            link: '#',
        },
        {
            name: 'Write Code',
            icon: './assets/code_icon.png',
            description: 'Translate designs and requirements into programming languages (like Python, Java, JavaScript',
            link: '#',
        },
        {
            name: 'Code Debug',
            icon: './assets/debug_icon.png',
            description: 'Identify and fix errors or bugs in software..',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a software developer from Nairobi, Kenya with 2 years of experience in multiple companies like Microsoft, Google and Kujuanpointllc</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}