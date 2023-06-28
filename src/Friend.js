import { Button } from "./Button";

/**
 * Component for displaying info about a single friend
 *
 * @param {Object} props Component props
 * @param {Object} props.friend Friend object
 * @param {Function} props.onSelection Called when friend is selected/unselected
 * @param {Object} props.selectedFriend Currently selected friend
 *
 * @returns {Element} LI element containing friend info
 */
export function Friend({ friend, onSelection, selectedFriend }) {
  /** Determine if this friend is currently selected */
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
        {/* Button text based on selection state */}
      </Button>
    </li>
  );
}
