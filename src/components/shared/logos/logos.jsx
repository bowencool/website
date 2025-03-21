import clsx from 'clsx';
import PropTypes from 'prop-types';

import Container from 'components/shared/container/container';

import BranchLogo from './images/branch.inline.svg';
import BunnyshellLogo from './images/bunnyshell.inline.svg';
import CloudflareLogo from './images/cloudflare.inline.svg';
import CodeInstituteLogo from './images/code-institute.inline.svg';
import EqtLogo from './images/eqt.inline.svg';
import Fl0Logo from './images/fl0.inline.svg';
import GenomicsLogo from './images/genomics.inline.svg';
import HasuraLogo from './images/hasura.inline.svg';
import IllaLogo from './images/illa.inline.svg';
import MasterSchoolLogo from './images/masterschool.inline.svg';
import OctolisLogo from './images/octolis.inline.svg';
import OpusLogo from './images/opus.inline.svg';
import OutfrontLogo from './images/outfront7.inline.svg';
import ReplitLogo from './images/replit.inline.svg';
import SnapletLogo from './images/snaplet.inline.svg';
import SupergoodLogo from './images/supergood.inline.svg';
import FabricIoLogo from './images/the-fabric-io.inline.svg';
import VercelLogo from './images/vercel.inline.svg';
import WundergraphLogo from './images/wundergraph.inline.svg';
import ZimmerBioLogo from './images/zimmer-biomet.inline.svg';

const allLogos = {
  bunnyshell: BunnyshellLogo,
  hasura: HasuraLogo,
  replit: ReplitLogo,
  vercel: VercelLogo,
  illa: IllaLogo,
  octolis: OctolisLogo,
  cloudflare: CloudflareLogo,
  wundergraph: WundergraphLogo,
  'fabric-io': FabricIoLogo,
  snaplet: SnapletLogo,
  fl0: Fl0Logo,
  opus: OpusLogo,
  genomics: GenomicsLogo,
  branch: BranchLogo,
  'code-institute': CodeInstituteLogo,
  'master-school': MasterSchoolLogo,
  outfront: OutfrontLogo,
  supergood: SupergoodLogo,
  zimmer: ZimmerBioLogo,
  eqt: EqtLogo,
};

const LogosWall = ({ className, fill, logos }) => (
  <div className={clsx('logos', className)}>
    <ul className="logos-content">
      {logos.map((logo, idx) => {
        const Logo = allLogos[logo];
        return (
          <li key={idx}>
            <Logo className={clsx('h-10 w-auto md:h-8', fill)} />
          </li>
        );
      })}
    </ul>
    <ul className="logos-content" aria-hidden="true">
      {logos.map((logo, idx) => {
        const Logo = allLogos[logo];
        return (
          <li key={idx}>
            <Logo className={clsx('h-10 w-auto md:h-8', fill)} />
          </li>
        );
      })}
    </ul>
  </div>
);

LogosWall.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  logos: PropTypes.array,
};

const Logos = ({ className = '', withGreenFade = false, logos }) => (
  <Container size="medium" className={clsx('w-full', className)}>
    <div className="-mb-10 select-none md:-mb-8">
      <LogosWall className="logos-sides-fade" logos={logos} />
      {withGreenFade && (
        <LogosWall
          className="logos-central-mask -translate-y-10 md:-translate-y-8"
          fill="fill-green-45"
          logos={logos}
        />
      )}
    </div>
  </Container>
);

Logos.propTypes = {
  className: PropTypes.string,
  withGreenFade: PropTypes.bool,
  logos: PropTypes.array,
};

export default Logos;
