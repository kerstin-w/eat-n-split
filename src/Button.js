/**
 * Button component
 *
 * @param {Object} props Button props
 * @param {Function} props.onClick Callback fired when button is clicked
 * @param {String|Element} props.children Child element(s) to render inside button
 *
 * @returns {Element} Button element
 */
export function Button({ children, onClick }) {
  /** @returns Button element */
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
