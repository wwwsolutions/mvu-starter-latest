import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { p } = hh(h);

// PUBLIC
function paragraph(className, text) {
  return p({ className }, [text]);
}

export default paragraph;
