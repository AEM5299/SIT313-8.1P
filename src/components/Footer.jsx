import facebookIcon from '../images/facebook.png';

const Footer = () => {
    return <footer className="w-full bg-gray-800 text-white py-4 mt-8">
        <div className="flex container mx-auto">
            <div className="w-3/4 mr-5">
                <p className="inline mr-2">Signup to our newsletter</p>
                <input className="rounded border border-black mr-2 p-2" type="text" placeholder="Enter your email" />
                <button className="p-2 bg-gray-500 rounded">Subscribe</button>
            </div>
            <div className="w-1/4 py-2">
                <p className="inline mr-8">Connect with us</p>
                <img className="inline w-6 mr-2" src={facebookIcon} />
                <img className="inline w-6 mr-2" src={facebookIcon} />
                <img className="inline w-6" src={facebookIcon} />
            </div>
        </div>
    </footer>;
}

export default Footer;