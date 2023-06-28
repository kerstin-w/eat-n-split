import { Friend } from "./Friend";

/**
 * Component to display a list of friends
 *
 * @param {Object} props Component props
 * @param {Array} props.friends Array of friend objects
 * @param {Function} props.onSelection Called when a friend is selected
 * @param {Object} props.selectedFriend Currently selected friend
 *
 * @returns {Element} UL element containing Friend components
 */
export function FriendsList({ friends, onSelection, selectedFriend }) {
  /**
   * Render Friend component for each friend
   * Pass relevant props to Friend component
   */
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
