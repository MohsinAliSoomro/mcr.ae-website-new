import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { PiXLogoBold } from 'react-icons/pi'; // Twitter/X icon from Phosphor
import { MdEmail } from 'react-icons/md';


export default function ShareButtons() {
    const iconClass =
        "text-[#33544E] text-xl group-hover:scale-110 transition-transform";

    const wrapperClass =
        "border border-gray-300 p-2 rounded-full flex items-center justify-center w-10 h-10 group";

    return (
        <div className="mt-6">
            <p className="font-semibold text-[#33544E] mb-3">Share:</p>
            <div className="flex items-center gap-4">
                <div className={wrapperClass}><FaWhatsapp className={iconClass} /></div>
                <div className={wrapperClass}><FaFacebookF className={iconClass} /></div>
                <div className={wrapperClass}><FaLinkedinIn className={iconClass} /></div>
                <div className={wrapperClass}><PiXLogoBold className={iconClass} /></div>
                <div className={wrapperClass}><MdEmail className={iconClass} /></div>
            </div>
        </div>
    );
}
