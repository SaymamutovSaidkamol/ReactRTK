import { memo, useState } from 'react'
import { useDeleteCommentMutation, useGetCommentsQuery } from '../../redux/api/comment.api'
import ModalOpen from '../modal_prod/ModalProd';
const CommentWrapper = () => {
  const [modalOpen, setModalOpen] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useGetCommentsQuery({ limit: 500 })
  console.log(data);
  const [deleteProd] = useDeleteCommentMutation()

  const handleDelete = (id: any) => {
    console.log(id);
    deleteProd(id)
  }

  const handleModal = (item: any) => {
    setModalOpen(item)
    setIsModalOpen(true);
  }

  return (
    <>

      <div className='container mx-auto mt-20'>
        <div className='grid grid-cols-4 gap-3'>
          {
            data?.map((item: any) => (
              <div key={item.id} className='rounded-[8px] bg-[#eee] pb-2'>
                <div>
                  <img src="https://plugins.shopware-staging.overdose.digital/media/85/a6/7c/1701338923/The-product-of-you-810x810.png" alt="" />
                </div>
                <div className='p-5'>
                  <h3 className='text-2xl'><strong>Name </strong>{item.name}</h3>
                  <h3 className='text-[18px]'>{item.price} USD</h3>
                  <h3>{item.description}</h3>
                </div>
                <div className='flex justify-around py-2'>
                  <button className='text-white hover:bg-red-500 cursor-pointer outline-none px-4 py-2 rounded-[5px] bg-[#ccc]' onClick={() => handleDelete(item.id)}>delete</button>
                  <button className='text-white hover:bg-green-500 cursor-pointer outline-none px-2 py-2 rounded-[5px] bg-[#ccc]' onClick={() => handleModal(item)}>update</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {
        isModalOpen && <ModalOpen modalOpen={modalOpen} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      }

    </>
  )
}

export default memo(CommentWrapper)