import Container from 'components/shared/container/container';

import Api from './api';
import Oauth from './oauth';

const Integration = () => (
  <section className="integration safe-paddings mt-[200px] 2xl:mt-40 xl:mt-36 lg:mt-28 md:mt-20">
    <Container className="grid-gap-x grid grid-cols-12" size="lg">
      <div className="col-span-10 col-start-2 flex flex-col items-center xl:col-span-full xl:col-start-1">
        <span className="inline-block rounded-[40px] bg-green-45/10 px-3.5 py-2 text-xs font-semibold uppercase leading-none text-green-45 lg:px-2.5 lg:text-[10px]">
          Integrate
        </span>
        <h2 className="mt-2 max-w-[700px] text-center text-[56px] font-medium leading-none tracking-tighter xl:max-w-[600px] xl:text-[44px] lg:max-w-[450px] lg:text-4xl md:max-w-[400px] md:text-3xl">
          Choose the integration that fits your requirements
        </h2>
        <p className="mt-4 text-center text-lg font-light leading-snug xl:text-base md:mt-2.5">
          Neon provides two methods for seamless integration with your product.
        </p>
        <Oauth />
        <Api />
      </div>
    </Container>
  </section>
);

export default Integration;
