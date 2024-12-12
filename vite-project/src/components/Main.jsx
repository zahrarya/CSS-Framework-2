const MainSection = () => {
  return (
    <main className="mx-5 mt-16">
      <div className="px-10">
        <h2 className="text-3xl font-semibold">
          Everything you need to start a website
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consequuntur.
        </p>
      </div>
      <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-16">
        <div className="mb-10 flex gap-2 hover:shadow-xl p-10 transition-all">
          <div>
            <img
              className="w-40"
              src="https://img.icons8.com/stickers/100/performance-2.png"
              alt=""
            />
          </div>
          <div>
            <h4 class="text-xl font-medium">Performance Optimization</h4>
            <p class="text-gray text-sm">
              Enhancing React apps by minimizing re-renders, lazy loading
              components, and utilizing memoization techniques for improved
              performance and speed.
            </p>
          </div>
        </div>
        <div className="mb-10 flex gap-2 hover:shadow-xl p-10 transition-all">
          <div>
            <img
              className="w-40"
              src="https://img.icons8.com/nolan/64/request-service.png"
              alt=""
            />
          </div>
          <div>
            <h4 class="text-xl font-medium">Redux State Management</h4>
            <p class="text-gray text-sm">
              Efficiently manage complex application state using Redux Toolkit,
              providing simplified syntax and built-in best practices for
              developers.
            </p>
          </div>
        </div>
        <div className="mb-10 flex gap-2 hover:shadow-xl p-10 transition-all">
          <div>
            <img
              className="w-40"
              src="https://img.icons8.com/color/48/design--v1.png"
              alt=""
            />
          </div>
          <div>
            <h4 class="text-xl font-medium">Tailwind Responsive Design</h4>
            <p class="text-gray text-sm">
              Create responsive web interfaces effortlessly using Tailwind CSS
              utility classes, ensuring a consistent experience across all
              device sizes.
            </p>
          </div>
        </div>
        <div className="mb-10 flex gap-2 hover:shadow-xl p-10 transition-all">
          <div>
            <img
              className="w-40"
              src="https://img.icons8.com/3d-fluency/94/deployment.png"
              alt=""
            />
          </div>
          <div>
            <h4 class="text-xl font-medium">Vite Production Deployment</h4>
            <p class="text-gray text-sm">
              Streamline the deployment process of Vite-based projects to
              production environments with optimized build configurations and
              deployment strategies.
            </p>
          </div>
        </div>
        <div className="mb-10 flex gap-2 hover:shadow-xl p-10 transition-all">
          <div>
            <img
              className="w-40"
              src="https://img.icons8.com/color/48/combine.png"
              alt=""
            />
          </div>
          <div>
            <h4 class="text-xl font-medium">React Library Integration</h4>
            <p class="text-gray text-sm">
              Seamlessly add functionality to React applications by integrating
              third-party libraries, ensuring smooth interactions and enhanced
              capabilities.
            </p>
          </div>
        </div>
        <div className="mb-10 flex gap-2 hover:shadow-xl p-10 transition-all">
          <div>
            <img
              className="w-40"
              src="https://img.icons8.com/color/48/checked-identification-documents.png"
              alt=""
            />
          </div>
          <div>
            <h4 class="text-xl font-medium">React App Authentication</h4>
            <p class="text-gray text-sm">
              Secure React applications with robust authentication mechanisms,
              using libraries like Firebase, Auth0, or custom JWT-based
              solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
