import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, video, source } = hh(h);

function htmlVideo(dispatch, className, model) {
  // const { href, title  } = model;

  return div({ className: 'bg-video' }, [
    video({
      className: 'bg-video__content',
      attributes: {
        autoplay: '',
        muted: '',
        loop: '',
      }
    }, [
      source({
        src: '/assets/videos/video.mp4',
        attributes: {
          type: 'video/mp4'
        }
      }),
      source({
        src: '/assets/videos/video.webm',
        attributes: {
          type: 'video/webm'
        }
      }),
      'Your Browser is not supported!'
    ]),
  ]);

}

export default htmlVideo;
