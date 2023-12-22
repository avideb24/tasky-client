import NavBar from './NavBar';
import Footer from './Footer';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mx-5'>
                <NavBar></NavBar>
                <div className="text-center space-y-3 py-10">
                    <h2 className="text-center text-3xl text-yellow-500 font-bold pt-4">About</h2>
                    <div className='w-32 h-1 mx-auto bg-yellow-500 mb-8'></div>
                    <p className="pt-5"><span className="text-2xl font-bold">Tasky</span> is the heartbeat of the tech community, connecting passionate individuals with the latest trends, innovations, and thought leaders in the technology realm. Our mission is to bridge the gap between tech enthusiasts and the most impactful events happening worldwide.</p>
                    <p>At Tasky, we curate a diverse array of tech events, ranging from hackathons and startup meetups to industry conferences and product launches. We believe in the power of knowledge sharing and networking, empowering professionals and enthusiasts alike to stay ahead in this ever-evolving digital landscape.</p>
                    <p>Join us on this exhilarating journey of discovery and inspiration. Whether you&#39;re a seasoned developer, an aspiring entrepreneur, or simply curious about the future of technology, TechVibe is your compass in the dynamic world of tech events.</p>
                    <p>Stay tuned, stay inspired, and let&#39;s ride the wave of innovation together!</p>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;