/***
 * @auth: frog
 * @time: 2020/11/21
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {useCallback} from 'react';

const Item = (props) => {

  const {
    data,
    deleteTodo,
    finishTodo,
  } = props;

  const handleDelete = useCallback(() => {
    deleteTodo(data.id);
  }, [deleteTodo, data]);

  const handleUpdate = useCallback(() => {

  }, []);
  const handleFinish = useCallback(() => {
    finishTodo(data.id);
  }, [finishTodo, data]);


  return (
    <div className='item'>
      { data.title }
      <div className='action'>
        <button onClick={handleDelete} className="delete">删除</button>
        <button onClick={handleUpdate} className="update">修改</button>
        <button onClick={handleFinish} className="finish">
          标记为{ data.status ? '未' : '已' }完成
        </button>
      </div>
    </div>
  )
}

export default Item;
