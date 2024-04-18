

import IGUser from "../../../components/igUser";

const friends = [
    {
        id: "1",
        name: "Andy_1",
        location: "Tokyo",
        account: "Hikyu_01",
        isFollowing: true,
        avatar: "../../images/avatars/a1.jpeg",
      },
      {
        id: "2",
        name: "Andy_2",
        location: "Tokyo",
        account: "Hikyu_02",
        isFollowing: true,
        avatar: "../../images/avatars/a2.jpeg",
      },
      {
        id: "3",
        name: "Andy_3",
        location: "Tokyo",
        account: "Hikyu_03",
        isFollowing: true,
        avatar: "../../images/avatars/a3.jpeg",
      },
      {
        id: "4",
        name: "Andy_4",
        location: "Tokyo",
        account: "Hikyu_04",
        isFollowing: true,
        avatar: "../../images/avatars/a4.jpeg",
      },
      {
        id: "5",
        name: "Andy_5",
        location: "Tokyo",
        account: "Hikyu_05",
        isFollowing: true,
        avatar: "../../images/avatars/a5.jpeg",
      },
      {
        id: "6",
        name: "Andy_6",
        location: "Tokyo",
        account: "Hikyu_06",
        isFollowing: true,
        avatar: "../../images/avatars/a6.jpeg",
      },
      {
        id: "7",
        name: "Andy_7",
        location: "Tokyo",
        account: "Hikyu_07",
        isFollowing: true,
        avatar: "../../images/avatars/a7.jpeg",
      },
      {
        id: "8",
        name: "Andy_8",
        location: "Tokyo",
        account: "Hikyu_08",
        isFollowing: true,
        avatar: "../../images/avatars/a8.jpeg",
      },
      {
        id: "9",
        name: "Andy_9",
        location: "Tokyo",
        account: "Hikyu_09",
        isFollowing: true,
        avatar: "../../images/avatars/a9.jpeg",
      },
      {
        id: "10",
        name: "Andy_10",
        location: "Tokyo",
        account: "Hikyu_10",
        isFollowing: true,
        avatar: "../../images/avatars/a10.jpeg",
      },
  ];

const IGProfile = () =>{


    return<>
        <div className="mt-8 ml-8 shadow-lg box-border p-2">
            <IGUser account="AndyChou" location="Taipei Taiwan" avatar="../../images/avatars/a1.jpeg" size="medium"/>
            <p className="font-bold text-gray-400 mt-4 mb-3 text-sm">You are following</p>

            {friends.map((item)=>{
                const {id, account, avatar, isFollowing, location } = item;
                return (
                    <div className="-mt-3" key={id}>
                        <IGUser
                            account={account}
                            avatar={avatar}
                            location={location}
                            isFollowing={true}
                            showFollow
                        />
                    </div>
                )
            })}


        </div>
    </>
} 
export default IGProfile;