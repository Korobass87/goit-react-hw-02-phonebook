import './Filter.scss'

const Filter = ({ filter, changeFilter }) => (
    <label className="filter-label">
      Find contact by name
      <input className="filter-input" type="text" value={filter} onChange={changeFilter} />
    </label>
  );

  export default Filter