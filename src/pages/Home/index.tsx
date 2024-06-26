import React from "react";
import Layout from "../components/Layout";
import IGProfile from "./components/inProfile";
import IGStory from "./components/igStory";
import IGUser from "../components/igUser";
import db from "../../db.json";
import IgPost from "./components/igPost";

const data = db.post

const IGPostList:React.FC = () =>{

    return <>
        {
            data.map((item)=>{
                const {
                    id,location,account,avatar,photo,likes,description,hashTag,createTime,
                } = item;
                return (
                <IgPost key={id} account={account} location={location} avatar={avatar} photo={photo} likes={likes} description={description} hashTag={hashTag} createTime={createTime}/>
                );
            })};
    </>
}

const Home = () => {
  return (
    <>
      <Layout>
        <div className="flex lg:justify-center">
          {/* left container */}
          <div className="w-full lg:w-[600px]">
            <IGStory/>
            <IGPostList/>
          </div>
          {/* right container */}
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile/>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
