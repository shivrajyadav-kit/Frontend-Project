import React, {Component} from "react";

class AdopterData extends Component {
    render() {
        const {formdata, handleGOBack} = this.props;
    console.log("AdopterData formData:", formdata);
    return (
        <div>
            <table style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    border: "1px solid #ddd",
                    fontSize: "18px",
                    textAlign: "left",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textTransform: "capitalize",
                    fontFamily: "Arial, sans-serif",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}>
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Type</th>
                            <th>Adopter Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formdata?.map((data, index) => (
                            <tr key={index}>
                                <td>{data.petName}</td>
                                <td>{data.petType}</td>
                                <td>{data.adopterName}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <button
                        onClick={handleGOBack}
                        style={{
                            padding: "10px 20px", 
                            boxSizing: "border-box",
                            width: "auto", 
                            display: "inline-block" 
                        }}
                    >
                        Go Back
                    </button>
                </div>
        </div>
    )
}
}
export default AdopterData;