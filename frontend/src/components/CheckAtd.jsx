
function CheckAtd() {
    return (
        <div className="studentsSection">
            <div className="studentsTop">
                <h3>Attendance Logs</h3>
            </div>
            <input style={{width: "170px", margin: "20px 0px"}} type="date" />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Roll no.</th>
                        <th scope="col">Student's Name</th>
                        <th scope="col">Check in Time</th>
                        <th scope="col">Check out Time</th>
                        <th scope="col">Total Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CheckAtd;