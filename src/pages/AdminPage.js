import { Link } from "react-router-dom"
import BlogList from "../components/BlogList"

const AdminPage = () => {

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>관리자 페이지</h2>
                <div>
                    <Link to='/blogs/create' className="btn btn-success">글 생성</Link>
                </div>
            </div>
            <BlogList isAdmin={true}/>
        </div>
    )

}

export default AdminPage