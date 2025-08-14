import { Button } from '@mui/material'
import Desk from '../../assets/desk.png'

function HeroSection() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-around items-center bg-gray-100 w-full h-auto py-10 px-4">
                {/* Text Section */}
                <div className="flex flex-col justify-center items-center md:items-start gap-5 md:w-1/2">
                    <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight">
                        <span style={{ color: "#4D4D4D" }}>Lessons and <br /> insights</span>
                        <span style={{ color: "#4CAF4F" }}> from 8 <br /> years</span>
                    </h1>
                    <p className="text-center md:text-left text-base" style={{ color: "#717171" }}>
                        Where to grow your business as a photographer: site or social media?
                    </p>
                    <Button
                        sx={{
                            backgroundColor: "#4CAF4F",
                            textTransform: "none"
                        }}
                        variant="contained"
                    >
                        Register Now
                    </Button>
                </div>

                {/* Image Section */}
                <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
                    <img src={Desk} alt="Desk" className="w-full max-w-[400px] h-auto object-contain" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection