import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
$(function () {

  $('.changeLanguage').click(function () {

      var code = $(this).attr('data-code');

      $.ajax({
          type: 'POST',
          url: '/Home/ChangeLanguage',
          data: { lg: code },
          success: function (resp) {
              document.location.reload();
          },
          error: function () {
              console.log('Failed to change language');
          }
      });

  });
});
// Thêm sự kiện vào liên kết
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn tải lại trang
      const href = this.getAttribute('href');
      history.pushState(null, '', href); // Thay đổi URL
      // Load nội dung mới ở đây (nếu cần)
      console.log(`Navigated to ${href}`);
  });
});
