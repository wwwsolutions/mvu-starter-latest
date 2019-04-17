import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import featureBox from '../../components/feature-box/feature-box.component';

const { div, section, } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const [ box1, box2, box3, box4 ] = model.features.boxes;

  return section({
    id: 'features',
    className: 'section features',
  }, [

    div({ className: 'row' }, [
      div({ className: 'col-1-of-4' }, [
        featureBox(dispatch, 'icon-basic-world', box1),
      ]),
      div({ className: 'col-1-of-4' }, [
        featureBox(dispatch, 'icon-basic-compass', box2),
      ]),
      div({ className: 'col-1-of-4' }, [
        featureBox(dispatch, 'icon-basic-map', box3),
      ]),
      div({ className: 'col-1-of-4' }, [
        featureBox(dispatch, 'icon-basic-heart', box4),
      ]),
    ]),

  ]);
}

export { view as featuresView };
