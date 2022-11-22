import { Subs } from "../types";

interface Props {
  subs: Array<Subs>;
}

const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((subs) => {
        return (
          <li key={subs.nick}>
            <img src={subs.avatar} alt={`Avatar for ${subs.nick}`} />
            <h4>
              {subs.nick}(<small>{subs.subMonths}</small>)
            </h4>
            <p>{subs.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
