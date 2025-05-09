import HeroImg from "@/assets/images/profile_pic.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m Md. Ibne Sina, a passionate Computer Science 
                graduate from KUET with a strong background in full-stack 
                development, problem solving, and deep learning. 
                I’ve solved over 600 coding problems across various platforms 
                and led several impactful projects.{" "}
                <span className="font-bold text-white">
                  I'm committed to building intelligent, scalable, and user-centered software.
                </span>
              </p>

              <p className="text-white">
                Beyond coding, I’ve taken on leadership roles in student 
                clubs and hackathons, and I’m proud to have received the 
                Dean’s Award and won Math Olympiads. I love turning ideas 
                into solutions that make a real difference.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner with a deep curiosity for machine learning, 
                    software systems, and solving real-world problems through technology. 
                    Whether leading a team at a hackathon or building end-to-end solutions, 
                    I thrive on challenges that require both innovation and execution. 
                    I aim to contribute to the tech ecosystem with tools, research, and products 
                    that matter.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Md. Ibne Sina
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
