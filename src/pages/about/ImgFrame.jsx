import React from 'react'

function ImgFrame() {
  return (
    <div className="w-full h-[550px] flex gap-1">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full h-[70%]">
            <img className="h-full" src="https://thumbs.dreamstime.com/b/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-76106466.jpg" alt="" />
          </div>
          <div className=" overflow-hidden w-full h-[30%] bg-purple-600">
            <img className=" h-full w-full " src="https://thumbs.dreamstime.com/b/oak-tree-growing-books-wooden-table-education-school-literature-reading-knowledge-concept-heap-179478135.jpg" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="h-[50%] ">
            <img className="h-full w-full" src="https://thumbs.dreamstime.com/b/open-book-table-background-books-open-book-table-background-many-books-142259700.jpg" alt="" />
          </div>
          <div className="h-[50%] flex gap-1">
            <div className=" w-full">
              <img className=" h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZ4xfa-Rj-ifp77q3jvMCuo4m0h8hw2R6u6at2cgvgeO5B6xWvdRmqAt2RoPOBu2fLa0&usqp=CAU" alt="" />
            </div>
            <div className=" w-full">
            <img className="h-full" src="https://img.freepik.com/premium-photo/books-table-with-word-library-top_865967-50241.jpg?w=360" alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ImgFrame