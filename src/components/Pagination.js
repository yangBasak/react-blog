import propTypes from "prop-types"

const Pagination = ({currentPage, totalPage, onClick, limit}) => {
    const currentSet = Math.ceil(currentPage/limit)
    const startPage = limit * (currentSet - 1) + 1
    const lastSet = Math.ceil(totalPage/limit)
    const numOfPageForSet = currentSet === lastSet ? totalPage%limit : limit
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {currentSet !== 1 && 
                    <li 
                        className="page-link cursor-pointer"
                        onClick={()=> onClick(startPage - limit)}    
                    >
                        이전
                    </li>}
                {Array(numOfPageForSet).fill(startPage).map((val, i)=> val + i).map((pageNum)=>{
                    return (
                        <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active': ''}`}>
                            <span 
                                className="page-link cursor-pointer" 
                                onClick={()=>{
                                    onClick(pageNum)
                                }}
                            > 
                                {pageNum}
                            </span>
                        </li>
                    )
                })}
                {currentSet !== lastSet &&
                <li 
                    className="page-link cursor-pointer"
                    onClick={()=> onClick(startPage + limit)}
                >
                    다음
                </li>}
                
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    currentPage: propTypes.number, //현재 페이지 번호
    totalPage: propTypes.number, //총 페이지 수
    onClick: propTypes.func.isRequired,
    limit: propTypes.number //한 번에 띄우는 페이지네이션 수
}
Pagination.defaultProps = {
    currentPage: 1,
    limit: 5
}

export default Pagination