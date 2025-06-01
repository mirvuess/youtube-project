  const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    const content = document.getElementById('content');

    menuToggle.addEventListener('click', () => {
      sidebar.classList.remove('-translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });

    const pages = {
      asosiy: {
        title: 'Asosiy sahifa',
        body: 'Bu yerda asosiy kontent ko‘rsatiladi.'
      },
      tarix: {
        title: 'Tomosha tarixi',
        body: 'Siz tomosha qilgan videolar shu yerda.'
      },
      pleylist: {
        title: 'Pleylistlar',
        body: 'Siz saqlagan pleylistlar ro‘yxati.'
      },
      keyinroq: {
        title: 'Keyinroq',
        body: 'Keyinroq ko‘rmoqchi bo‘lgan videolaringiz.'
      },
      yoqqan: {
        title: 'Yoqqan videolar',
        body: 'Sizga yoqqan videolar shu yerda.'
      }
    };

    document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        if (pages[page]) {
          content.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${pages[page].title}</h2>
            <p>${pages[page].body}</p>
          `;
          sidebar.classList.add('-translate-x-full');
        }
      });
    });