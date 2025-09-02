import { motion, AnimatePresence } from "framer-motion";

function About() {
  return (
    <div>
      <motion.div
        className="w-full relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="bg-about.jpg"
          alt=""
          className="h-100 md:h-130 lg:h-180 w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-28 h-1/4 flex items-center justify-center">
          <h1 className="text-6xl font-[Italiana] text-gray-200 font-extrabold">
            ABOUT
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-5/6">
          <div className="my-5">
            <h1 className="text-3xl font-[Italiana] text-black font-bold">
              About Andrea
            </h1>
          </div>

          <div className="mb-5">
            <p className="text-xl font-[Italiana] text-black font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              efficitur velit sed malesuada bibendum. Curabitur tempor dui nec
              convallis vehicula. Proin congue consequat sapien ut gravida.
              Phasellus ut dolor convallis arcu tempus dictum in vitae purus.
              Quisque eget odio lorem. Proin libero elit, ullamcorper vulputate
              eros quis, lobortis sollicitudin quam. Vivamus lorem sem, mattis
              eu pretium vel, imperdiet vel enim. Sed porta convallis ultricies.
              Quisque tempor feugiat purus vel posuere. Donec eu aliquam eros,
              id porta libero. Quisque est orci, lobortis at posuere ac,
              porttitor eu nunc. Suspendisse risus felis, faucibus eget purus
              non, consequat sollicitudin orci. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div className="mb-5">
            <p className="text-xl font-[Italiana] text-black font-medium">
              Donec a diam lobortis, volutpat orci id, elementum lorem. In
              auctor non dolor a aliquet. Ut augue ipsum, mollis sollicitudin
              est non, vehicula luctus metus. Ut pulvinar, eros sed bibendum
              lobortis, ante metus mollis purus, vitae auctor dui mi at odio.
              Mauris id purus arcu. Proin lacus velit, feugiat vel metus sed,
              gravida blandit sapien. Mauris tristique tellus quis volutpat
              feugiat. Praesent maximus mi nec diam aliquet semper. Curabitur
              bibendum rutrum purus et euismod. Nunc rhoncus pretium placerat.
              Phasellus finibus vel metus ac posuere. Nam tempus risus risus, id
              sodales eros dapibus et. Donec at aliquet nulla, vitae consequat
              ex. Mauris dolor arcu, sodales nec finibus vitae, porttitor eget
              tortor. Phasellus in euismod magna. Sed vel ex vehicula, ultricies
              ligula in, auctor elit.
            </p>
          </div>

          <div>
            <p className="text-xl font-[Italiana] text-black font-medium">
              Etiam feugiat ante ante, vel faucibus ante aliquet ac. Aliquam
              erat volutpat. Curabitur nec tincidunt sapien. Curabitur porttitor
              sit amet lorem nec commodo. Suspendisse consectetur dolor lobortis
              nunc hendrerit vestibulum. Sed malesuada ipsum elit, nec bibendum
              orci accumsan eget. Aenean pharetra ac leo eget tempor. Nunc
              mattis ipsum mauris, eget volutpat lacus malesuada nec. Phasellus
              et condimentum sem, ac luctus arcu. Phasellus feugiat vitae augue
              tempor eleifend. Vivamus venenatis ex nulla, vitae aliquam leo
              tristique vitae. Donec porttitor consequat odio ac semper. Nam vel
              tortor non odio imperdiet viverra. Sed nec elementum tortor.
            </p>
          </div>

          <div className="mt-8 mb-5">
            <h1 className="text-3xl font-[Italiana] text-black font-bold">
              Neko jos dodatno poglavlje
            </h1>
          </div>

          <div className="mb-5">
            <p className="text-xl font-[Italiana] text-black font-medium">
              Donec a diam lobortis, volutpat orci id, elementum lorem. In
              auctor non dolor a aliquet. Ut augue ipsum, mollis sollicitudin
              est non, vehicula luctus metus. Ut pulvinar, eros sed bibendum
              lobortis, ante metus mollis purus, vitae auctor dui mi at odio.
              Mauris id purus arcu. Proin lacus velit, feugiat vel metus sed,
              gravida blandit sapien. Mauris tristique tellus quis volutpat
              feugiat. Praesent maximus mi nec diam aliquet semper. Curabitur
              bibendum rutrum purus et euismod. Nunc rhoncus pretium placerat.
              Phasellus finibus vel metus ac posuere. Nam tempus risus risus, id
              sodales eros dapibus et. Donec at aliquet nulla, vitae consequat
              ex. Mauris dolor arcu, sodales nec finibus vitae, porttitor eget
              tortor. Phasellus in euismod magna. Sed vel ex vehicula, ultricies
              ligula in, auctor elit.
            </p>
          </div>

          <div className="w-full flex justify-center mt-14 mb-10">
            <iframe
              className="w-full max-w-2xl aspect-video rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
