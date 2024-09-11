import  { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateTheater = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [screens, setScreens] = useState([
    {
      screenNumber: 1,
      screenType: '',
      seatLayout: [{ row: '', number: 1, type: '' }],
    },
  ]);

  const handleAddScreen = () => {
    setScreens([...screens, { screenNumber: screens.length + 1, screenType: '', seatLayout: [{ row: '', number: 1, type: '' }] }]);
  };

  const handleAddSeat = (screenIndex) => {
    const newScreens = [...screens];
    newScreens[screenIndex].seatLayout.push({ row: '', number: newScreens[screenIndex].seatLayout.length + 1, type: '' });
    setScreens(newScreens);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/v1/theater/create-theater', {
        name,
        location,
        screens,
      });

      toast.success('Theater created successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating theater:', error);
      toast.error('Failed to create theater');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 border rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6">Create Theater</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Theater Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {screens.map((screen, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">Screen {screen.screenNumber}</h3>
            
            <div className="mb-4">
              <label className="block text-gray-700">Screen Type:</label>
              <input
                type="text"
                value={screen.screenType}
                onChange={(e) => {
                  const newScreens = [...screens];
                  newScreens[index].screenType = e.target.value;
                  setScreens(newScreens);
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {screen.seatLayout.map((seat, seatIndex) => (
              <div key={seatIndex} className="mb-4">
                <h4 className="text-lg font-medium">Seat {seatIndex + 1}</h4>

                <div className="mb-2">
                  <label className="block text-gray-700">Row:</label>
                  <input
                    type="text"
                    value={seat.row}
                    onChange={(e) => {
                      const newScreens = [...screens];
                      newScreens[index].seatLayout[seatIndex].row = e.target.value;
                      setScreens(newScreens);
                    }}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-gray-700">Seat Number:</label>
                  <input
                    type="number"
                    value={seat.number}
                    onChange={(e) => {
                      const newScreens = [...screens];
                      newScreens[index].seatLayout[seatIndex].number = e.target.value;
                      setScreens(newScreens);
                    }}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-gray-700">Seat Type:</label>
                  <input
                    type="text"
                    value={seat.type}
                    onChange={(e) => {
                      const newScreens = [...screens];
                      newScreens[index].seatLayout[seatIndex].type = e.target.value;
                      setScreens(newScreens);
                    }}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => handleAddSeat(index)}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            >
              Add Seat
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddScreen}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-6"
        >
          Add Screen
        </button>

        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Create Theater
        </button>
      </form>
    </div>
  );
};

export default CreateTheater;
