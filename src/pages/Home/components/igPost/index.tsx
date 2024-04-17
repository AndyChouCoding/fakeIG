import IGUser from "../../../components/igUser";
import Comment from "../igPost/comment";

type IGPostProps = {
    account: string;
    location: string;
    avatar: string;
    photo: string;
    likes: number;
    description: string;
    hashTag: string;
    createTime: string;
}


const IGPost:React.FC<IGPostProps> = ({
    account,location,avatar,photo,likes,description,hashTag,createTime
}) =>{
    return<>
        <div className=" shadow-md pb-4 lg:mb-8">
            <IGUser account={account} location={location} avatar={avatar}/>
            <img src={photo}/>
            <Comment account={account} likes={likes} description={description} hashTag={hashTag} createTime={createTime}/>
        </div>
    </>
} 
export default IGPost;