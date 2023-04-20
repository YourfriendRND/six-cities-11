import './spinner.css';
const Spinner = (): JSX.Element => (
  <div data-testid="spinner-main-wrapper" className="app-spinner">
    <svg data-testid="spinner-content" className="spinner" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  </div>
);

export default Spinner;
