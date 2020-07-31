import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [editingFood, setEditingFood] = useState<IFoodPlate>({} as IFoodPlate);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      // TODO LOAD FOODS
      try {
        const response = await api.get('/foods');
        setFoods(response.data);
      } catch (error) {
        alert('Houve um erro consulta a servidor, tente novamente.');
      }
    }

    loadFoods();
  }, []);

  async function handleAddFood(
    food: Omit<IFoodPlate, 'id' | 'available'>,
  ): Promise<void> {
    try {
      // TODO ADD A NEW FOOD PLATE TO THE API
      //const newId = foods.map(f => f.id).reduce((a,b) => Math.max(a,b))+1;
      const ids = foods.map(f => f.id);
      const newId = Math.max(...ids)+1;
      Object.assign(food,{id:newId,available:true});
      await api.post('/foods',food).then((response)=>{
        setFoods([...foods,response.data]);
      });
    } catch (err) {
      alert('Houve um erro na hora de adicionar a informação, tente novamente.');
    }
  }

  async function handleUpdateFood(
    food: Omit<IFoodPlate, 'id' | 'available'>,
  ): Promise<void> {
    // TODO UPDATE A FOOD PLATE ON THE API
    try {
      Object.assign(food,{available:editingFood.available});
      const response = await api.put(`/foods/${editingFood.id}`,food);
      const newFoods = [...foods];
      const findIndex = newFoods.findIndex(f => f.id === editingFood.id);
      newFoods[findIndex] = response.data;
      setFoods(newFoods);
    } catch (error) {
      alert('Houve um erro na atualização da informação, tente novamente.');
    }
  }

  async function handleDeleteFood(id: number): Promise<void> {
    // TODO DELETE A FOOD PLATE FROM THE API
    try {
      await api.delete(`/foods/${id}`);
      const newFoods = [...foods];
      const findIndex = newFoods.findIndex(f => f.id === id);
      newFoods.splice(findIndex,1);
      setFoods(newFoods);
    } catch (error) {
      alert('Houve um erro na hora deletar, tente novamente.');
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food: IFoodPlate): void {
    // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE
    setEditingFood(food);
    toggleEditModal();
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
