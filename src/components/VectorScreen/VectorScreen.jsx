import { Button } from "@mui/material"
import Login from "../../assets/login.png"
import Unlock from "../../assets/Unlock.png"
import TwoGreen from "../../assets/twogreen.png"
import clubIcon from "../../assets/club.png"
import ClickIcon from "../../assets/ClickIcon.png"
import PayIcon from "../../assets/payIcon.png"

const array = [
    {
        img: TwoGreen,
        Amount: "2,254,341",
        text: "Members",
    },
    {
        img: clubIcon,
        Amount: "46,341",
        text: "Clubs",
    },
    {
        img: ClickIcon,
        Amount: "828,867",
        text: "Event Booking",
    },
    {
        img: PayIcon,
        Amount: "828,867",
        text: "Payments",
    },
]
function VectorScreen() {
    return (
        <>
            <div className=" w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 gap-10">

                {/* IMAGE SECTION */}
                <div className=" w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-[300px] object-contain"
                        src={Login}
                        alt="Login"
                    />
                </div>

                {/* TEXT SECTION */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 text-left">
                    <h1 className="font-bold text-3xl text-[#4D4D4D]">
                        The unseen of spending three years at Pixelgrade
                    </h1>
                    <p className="text-[#717171]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla...
                    </p>
                    <Button
                        sx={{
                            backgroundColor: "#4CAF4F",
                            textTransform: "none",
                            alignSelf: "flex-start"
                        }}
                        variant="contained"
                    >
                        Learn More
                    </Button>
                </div>
            </div>


            <div style={{ backgroundColor: "#F5F7FA" }} className="flex flex-wrap p-20 justify-between   items-center gap-8">
                <div className="text">
                    <h1 className="font-bold text-3xl text-[#4D4D4D]">
                        Helping a local <br /> <span style={{ color: "#4CAF4F" }} > business reinvent itself </span>
                    </h1>
                    <p className="text-[#717171]">
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className="w-full md:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {array.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="w-[50px] h-[50px] flex justify-center items-center">
                                <img src={item.img} alt={item.text} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl text-[#4D4D4D]">{item.Amount}</h1>
                                <p className="text-[#717171]">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className=" w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 gap-10">

                {/* IMAGE SECTION */}
                <div className=" w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-[300px] object-contain"
                        src={Unlock}
                        alt="Login"
                    />
                </div>

                {/* TEXT SECTION */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 text-left">
                    <h1 className="font-bold text-3xl text-[#4D4D4D]">
                        How to design your site footer like we did
                    </h1>
                    <p className="text-[#717171]">
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <Button
                        sx={{
                            backgroundColor: "#4CAF4F",
                            textTransform: "none",
                            alignSelf: "flex-start"
                        }}
                        variant="contained"
                    >
                        Learn More
                    </Button>
                </div>
            </div>

        </>


    )
}

export default VectorScreen