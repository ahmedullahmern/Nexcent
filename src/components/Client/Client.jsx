import Logo1 from "../../assets/Logo1.png"
import Logo2 from "../../assets/Logo2.png"
import Logo3 from "../../assets/Logo3.png"
import Logo4 from "../../assets/Logo4.png"
import Logo5 from "../../assets/Logo5.png"
import Logo6 from "../../assets/Logo6.png"
import threeboy from "../../assets/threeboyicon.png"
import bulldingIocn from "../../assets/bulldingIcon.png"
import GorupsIcon from "../../assets/GroupsIcon.png"

const array = [
    {
        img: threeboy,
        title: "Membership Organisations",
        desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
        img: bulldingIocn,
        title: "National Associations",
        desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
        img: GorupsIcon,
        title: "Clubs And Groups",
        desc: "Our membership management software provides full automation of membership renewals and payments"
    },
]

function ClientSection() {
    return (
        <div className="">
            <div className="flex justify-center items-center flex-col py-10">
                <h1 style={{ color: "#4D4D4D" }} className="font-bold text-3xl ">
                    Our Clients
                </h1>
                <p style={{ color: "#717171" }}>
                    We have been working with some fourtune 500+clients
                </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 gap-4 justify-items-center mx-auto ">
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo6} alt="" />
                <img src={Logo5} alt="" />
            </div>
            
            <div className="flex justify-center items-center flex-col py-10 mt-20 gap-5">
                <h1 style={{ color: "#4D4D4D" }} className="font-bold text-3xl text-center ">
                    Manage your entire community<br /> in a single system
                </h1>
                <p style={{ color: "#717171" }}>
                    Who Is Nextent Suitable For?
                </p>
            </div>
            <div className="flex justify-around items-center flex-wrap gap-10">
                {array.map((item, index) => (
                    <div key={index} className="max-w-sm text-center">
                        <img src={item.img} alt={item.title} className="mx-auto mb-4" />
                        <h2 className="text-xl font-semibold" style={{ color: "#4D4D4D" }}>{item.title}</h2>
                        <p className="text-sm" style={{ color: "#717171" }}>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ClientSection