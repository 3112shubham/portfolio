module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'john@example.com',
      profession: 'Web Developer',
      skills: 'HTML, CSS, JavaScript, Node.js',
      bio: 'Experienced web developer with 5 years of experience',
      image_url: 'https://randomuser.me/api/portraits/men/1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jane Smith',
      email: 'jane@example.com',
      profession: 'Graphic Designer',
      skills: 'Photoshop, Illustrator, UI/UX',
      bio: 'Creative designer specializing in branding',
      image_url: 'https://randomuser.me/api/portraits/women/1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mike Johnson',
      email: 'mike@example.com',
      profession: 'Data Scientist',
      skills: 'Python, R, Machine Learning',
      bio: 'Data enthusiast with strong analytical skills',
      image_url: 'https://randomuser.me/api/portraits/men/2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};