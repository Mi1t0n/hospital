import style from './TableHeader.module.scss';


const TableHeader = () =>
    (<thead>
    <tr className={style.row}>
        <th>Patients Name</th>
        <th>Department</th>
        <th>Appointment Date</th>
        <th>Serial Number</th>
        <th>Amount</th>
    </tr>
    </thead>)


export default TableHeader;
