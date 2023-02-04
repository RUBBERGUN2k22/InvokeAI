import InvokeButton from './InvokeButton';
import CancelButton from './CancelButton';
import LoopbackButton from './Loopback';
import { useAppSelector } from 'app/storeHooks';
import { activeTabNameSelector } from 'features/ui/store/uiSelectors';

/**
 * Buttons to start and cancel image generation.
 */
const ProcessButtons = () => {
  const activeTabName = useAppSelector(activeTabNameSelector);

  return (
    <div className="process-buttons">
      <InvokeButton />
      {activeTabName === 'img2img' && <LoopbackButton />}
      <CancelButton />
    </div>
  );
};

export default ProcessButtons;