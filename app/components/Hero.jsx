import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import heroImg from "@/public/images/hero-img.png";
import CustomInput from "@/app/components/CustomInput";
const Hero = () => {
  return (
    <section className="container py-[50px] px-2 flex flex-col items-center">
      <Link href="/">
        <Image
          src={logo}
          width={80}
          height={80}
          alt="Home"
          className="w-[60px] h-[60px] sm:w-[90px] sm:h-20"
        />
      </Link>

      <div className="flex flex-col items-center">
        <Image
          src={heroImg}
          width={350}
          height={150}
          alt="Hero"
          className="aspect-auto"
        />

        <h1 className="text-5xl font-bold text-white text-center leading-[120%]">
          Find <span className="text-primary">Movies</span> You’ll Love <br />{" "}
          Without the Hassle
        </h1>
      </div>

       <CustomInput />
    </section>
  );
};

export default Hero;
