import { FaEye } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Newscard = ({ aNews }) => {
    const { _id, author, title, image_url, details, rating, total_view } = aNews;

    return (
        <div>
            <div className="bg-base-200 p-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img className="w-12 rounded-full" src={author.img} alt="" />
                    <div>
                        <p className="text-black">{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <CiBookmark />
                    <IoShareSocialOutline />
                </div>
            </div>
            <h1 className="font-bold text-2xl my-1 font-poppins">{title}</h1>
            <img src={image_url} alt="" />
            {
                details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="font-semibold text-red-800">read more...</Link></p> : <p>{details}</p>
            }
            <div className="flex justify-between items-center border-y p-2 my-4">
                <div className="flex items-center gap-2">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{rating.number}</p>
                </div>
                <p className="flex items-center gap-1"><FaEye />{total_view}</p>
            </div>
        </div>
    );
};

export default Newscard;