import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    })
    return (
        <section id='banner' className="bg-secondary">
            <div data-aos="fade-up" data-aos-once={true}
                className="my-container min-h-[calc(100vh-96px)] text-left flex flex-col justify-center text-white space-y-4">
                <h4 className="text-xl text-primary font-medium">Hello, I am </h4>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">MD. Saiful Islam</h1>

                <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-neutral">I love to build dynamic websites</h2>
                <div className="md:w-1/2 space-y-3">
                    <p className="text-neutral">I'm a dedicated front-end web developer with a passion for crafting captivating user interfaces and delightful digital experiences.</p>
                    <p className="text-neutral">I specialize in turning designs into pixel-perfect, interactive web applications that engage users and leave a lasting impression. With a deep love for coding and a curiosity for pushing the boundaries of web development, I am dedicated to creating exceptional digital experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;