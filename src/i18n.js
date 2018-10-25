import i18n from 'i18next';

i18n
  .init({
    resources: {
      en: {
        translations: {
          "fullname": "Hoang Van Quan",
          'personal': 'Personal',
          'birthdate': 'Birthdate',
          'birthdate_c': '19th July 1994',
          'sex': 'Sex',
          'male': 'Male',
          'address': 'Address',
          'address_c': 'Quoc Oai - Ha Noi',
          'language': 'Language',
          'vietnamese': 'Vietnamese',
          'english': 'English',
          'skill':'Skill',
          'software': 'Software',

          'introduction': 'I\'ve been working as a web developer for 2 years.\nI have knowledge about Javascript, HTML5, CSS3, MySQL, ...\n I have good experience in building responsive website.\nWith a passion for self-improvement and learning new technology, I tend to be a senior web developer',
          'education&experience': 'EDUCATION & EXPERIENCE',
          'uet': 'University of Engineering and Technology',
          'education_c': 'Degree: Bachelor of Information Technology\nMajor: Information Technology\nGPA: 3.19/4',
          'saokhuee_c': 'Research, develope and provide software\'s services',
          'hblab_c': 'Cooperate and developing software with Japanese companies',
          'project': 'PROJECT',
          'sachmem': 'Sach mem',
          'sachmem_c': '- Description: A software supplement to school textbook\n- Technology: Ruby on Rails, MySQL, AngularJS, jQuery\n- Responsibility: Analysis and design, development',
          'safecracker_c': '- Description: 3D javascript webgame\n- Technology: BabylonJS\n- Responsibility: Development',
          'tms_c': '- Description: Employee management system\n- Technology: PHP(Laravel), MySQL, ReactJS\n- Responsibility: Front-end development',
          'bdr_c': '- Description: Restaurant booking website\n- Technology: Java, ReactJS\n- Responsibility: Front-end development',
          'online-exam_c': '- Description: A software for online examination\n- Technology: NodeJS, MongoDB, ReactJS\n- Responsibility: Analysis and design, development\n- Side project',
          'talk-to-stranger_c': '- Description: A chat application to talk to random user\n- Technology: NodeJS, Socket.io, ReactJS\n- Responsibility: Analysis and design, development\n- Side project',

          'hobbies': 'HOBBIES',
          'travelling': 'Travelling',
          'music': 'Music',
          'gaming': 'Gaming',

        }
      },
      vn: {
        translations: {
          "fullname": "Hoàng Văn Quân",
          'personal': 'Thông tin cá nhân',
          'birthdate': 'Ngày sinh',
          'birthdate_c': '19/07/1994',
          'sex': 'Giới tính',
          'male': 'Nam',
          'address': 'Địa chỉ',
          'address_c': 'Quốc Oai - Hà Nội',
          'language': 'Ngôn ngữ',
          'vietnamese': 'Tiếng Việt',
          'english': 'Tiếng Anh',
          'skill':'Kỹ năng',
          'software': 'Phần mềm',

          'introduction': 'Tôi là lập trình viên web với 2 năm kinh nghiệm.\nCó kiến thức và kinh nghiệm về Javascript, HTML5, CSS3, MySQL...\nCó khả năng xây dựng website đáp ứng responsive.\nVới tính cách cần cù và ham học hỏi công nghệ mới, tôi hướng tới trở thành một senior web developer trong tương lai.',
          'education&experience': 'HỌC VẤN & KINH NGHIỆM',
          'uet': 'Đại học Công nghệ - Đại học Quốc gia Hà Nội',
          'education_c': 'Bằng cấp: Cử nhân\nChuyên ngành: Công nghệ thông tin\nĐiểm TB: 3.19/4',
          'saokhuee_c': 'Nghiên cứu, phát triển và cung cấp các dịch vụ phần mềm',
          'hblab_c': 'Hợp tác và phát triển phần mềm với các công ty đến từ Nhật Bản',
          'project': 'Dự án đã làm',
          'sachmem': 'Sách mềm',
          'sachmem_c': '- Mô tả: Phần mềm bổ trợ sách giáo khoa\n- Công nghệ: Ruby on Rails, MySQL, AngularJS, jQuery\n- Vị trí: Phân tích thiết kế, lập trình',
          'safecracker_c': '- Mô tả: Javascript webgame 3D\n- Công nghệ: BabylonJS\n- Vị trí: Lập trình viên',
          'tms_c': '- Mô tả: Phần mềm quản lý nhân viên và chấm công\n- Công nghệ: PHP(Laravel), MySQL, ReactJS\n- Vị trí: Lập trình viên front-end',
          'bdr_c': '- Mô tả: Phần mềm đặt bàn online cho nhà hàng\n- Công nghệ: Java, ReactJS\n- Vị trí:  Lập trình viên front-end',
          'online-exam_c': '- Mô tả: Phần mềm làm bài thi trắc nghiệm\n- Công nghệ: NodeJS, MongoDB, ReactJS\n- Vị trí: Phân tích thiết kế, lập trình\n- Dự án cá nhân',
          'talk-to-stranger_c': '- Mô tả: Ứng dụng chat ngẫu nhiên\n- Công nghệ: NodeJS, Socket.io, ReactJS\n- Vị trí: Phân tích thiết kế, lập trình\n- Dự án cá nhân',

          'hobbies': 'SỞ THÍCH',
          'travelling': 'Du lịch',
          'music': 'Âm nhạc',
          'gaming': 'Trò chơi điện tử',
        }
      }
    },
    lang: 'vn',
    fallbackLng: 'en',

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;
