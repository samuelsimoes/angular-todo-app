class TodosController < ApplicationController
  respond_to :html, :json

  def index
    @todos = Todo.all

    respond_with @todos
  end

  def create
    @todo = Todo.create(todo_params)

    respond_with @todo
  end

  def update
    @todo = Todo.find(params[:id])

    @todo.update(todo_params)

    respond_with @todo
  end

  def destroy
    @todo = Todo.find(params[:id])

    @todo.destroy

    respond_with @todo
  end

  private

  def todo_params
    params.require(:todo).permit(:done, :title, :content, :deliver_date)
  end
end
