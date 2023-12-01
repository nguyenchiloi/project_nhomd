-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 01, 2023 lúc 03:21 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cd_web`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `addresses`
--

CREATE TABLE `addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `street` varchar(191) NOT NULL,
  `city` varchar(191) NOT NULL,
  `country` varchar(191) NOT NULL,
  `state` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `money` double NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `product_id`, `money`, `quantity`, `created_at`, `updated_at`) VALUES
(14, 24, 2, 69, 1, '2023-11-27 00:59:02', '2023-11-27 00:59:02'),
(26, 24, 5, 109, 1, '2023-11-28 23:45:31', '2023-11-28 23:45:31'),
(25, 1, 12, 289, 1, '2023-11-28 02:43:11', '2023-11-28 02:43:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'màn hình', '2023-11-06 01:33:54', '2023-11-06 01:33:54'),
(2, 'Điện thoại', '2023-11-06 01:55:05', '2023-11-06 01:55:05'),
(3, 'Chuột Gaming', '2023-11-06 01:55:22', '2023-11-06 01:55:22'),
(4, 'Tai Nghe', '2023-11-06 01:55:27', '2023-11-06 01:55:27'),
(5, 'Bàn phím', '2023-11-06 02:06:05', '2023-11-06 02:06:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `comment` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `product_id`, `comment`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'a yeu e', '2023-11-28 20:12:36', '2023-11-28 20:12:36'),
(2, 24, 2, 'yeu nhieu k', '2023-11-28 20:40:50', '2023-11-28 20:40:50'),
(3, 24, 2, 'aaa', '2023-11-28 20:42:03', '2023-11-28 20:42:03'),
(4, 24, 2, 'bbb', '2023-11-28 20:42:08', '2023-11-28 20:42:08'),
(5, 24, 5, 'hahaha', '2023-11-28 23:39:52', '2023-11-28 23:39:52'),
(6, 1, 3, 'thanh ga qua di', '2023-11-29 07:05:05', '2023-11-29 07:05:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `message` varchar(191) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `title`, `message`, `status`, `created_at`, `updated_at`) VALUES
(1, 'lợi', 'nguyenloichala123@gmail.com', 'fix lỗi', 'abc', 0, '2023-11-27 02:23:58', NULL),
(2, 'loi', 'nguyenloichala123@gmail.com', 'aa', 'adads', 1, '2023-11-27 02:26:49', NULL),
(3, 'duy dep trai', 'thanhduy1825@gmail.com', 'tai sao phuc ga', 'phuc da co don lau nam', 0, '2023-11-29 06:57:58', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2023_11_02_105311_create_products_table', 1),
(11, '2023_11_02_105408_create_categories_table', 1),
(12, '2023_11_02_105537_create_addresses_table', 1),
(13, '2023_11_02_105555_create_contacts_table', 1),
(14, '2023_11_02_105621_create_orders_table', 1),
(15, '2023_11_02_105640_create_vouchers_table', 1),
(16, '2023_11_02_111807_create_payments_table', 1),
(17, '2023_11_03_025108_create_roles_table', 1),
(18, '2023_11_24_024953_create_comments_table', 2),
(19, '2023_11_24_025819_create_showrooms_table', 2),
(20, '2023_11_24_025826_create_news_table', 2),
(21, '2023_11_24_030452_create_carts_table', 2),
(22, '2023_11_25_012325_create_reviews_table', 3),
(23, '2023_11_25_012739_create_replies_table', 3),
(24, '2023_11_27_235154_create_wishlists_table', 4),
(25, '2023_11_28_050012_create_order_items_table', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text NOT NULL,
  `slug` text NOT NULL,
  `description` longtext NOT NULL,
  `photo` varchar(191) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `title`, `slug`, `description`, `photo`, `version`, `created_at`, `updated_at`) VALUES
(30, 'Còn ba ngày kết thúc Sơ loại Tech Awards 2023', 'Vòng Sơ loại của Tech Awards 2023 kéo dài đến hết ngày 30/11 và đang thu hút hàng chục nghìn lượt bình....', 'Vòng Sơ loại của Tech Awards 2023 kéo dài đến hết ngày 30/11 và đang thu hút hàng chục nghìn lượt bình chọn ở 18 hạng mục.\n\nNăm nay, chương trình Bình chọn Sản phẩm Công nghệ Xuất sắc - Tech Awards có 18 hạng mục giải thưởng, chia thành ba nội dung: Sản phẩm số, Thương hiệu gia dụng, Nền tảng. Chương trình gồm ba giai đoạn: vòng Sơ loại từ ngày 15/11 đến 30/11, vòng Chung kết từ ngày 4 đến 25/12, và Lễ trao giải dự kiến tổ chức đầu tháng 1/2024 trong trung tâm triển lãm SECC tại TP HCM.\n\nTuần bình chọn thứ hai của vòng Sơ loại đang diễn ra cuộc đua vote giữa Lazada và Tiki ở hạng mục Nền tảng Thương mại điện tử xuất sắc. Trong khi đó, những hạng mục khác liên tục chứng kiến sự đổi ngôi. Hiện Xiaomi dẫn đầu ở cả ba hạng mục tham gia là Điện thoại xuất sắc, Điện thoại cho người sáng tạo nội dung và Điện thoại phổ thông tốt nhất. Viettel đang thu hút nhiều bình chọn nhất ở nhóm Camera AI xuất sắc, vượt qua Hanet Access Air - sản phẩm dẫn đầu tuần trước.\n\nNội dung Thương hiệu gia dụng tiếp tục so kè gắt gao giữa các đơn vị. Samsung hiện hút nhiều lượt bình chọn nhất hai hạng mục Tủ lạnh và Máy giặt, trong khi Daikin thể hiện ưu thế ở hạng mục Điều hòa.\n\nCác nhãn hàng sẽ còn ba ngày để kêu gọi bình chọn và có thể sẽ tạo ra những sự bất ngờ trước khi cổng Sơ loại đóng vào cuối ngày 30/11.', 'tintuc4.jpg', 1, '2023-11-29 02:03:55', '2023-11-29 02:03:55'),
(29, 'Bộ sưu tập điện thoại di động lớn nhất thế giới', 'ROMANIAAndrei Bilbie Argentis sở hữu 3.456 mẫu điện thoại di động - bộ sưu tập lớn nhất được Kỷ lục Guinness....', 'ROMANIAAndrei Bilbie Argentis sở hữu 3.456 mẫu điện thoại di động - bộ sưu tập lớn nhất được Kỷ lục Guinness ghi nhận.\n\nTheo Kỷ lục Guinness Thế giới, tính đến tháng 11, Argentis, sống tại thành phố Cluj-Napoca, Romania, đang có 3.456 mẫu điện thoại, không tính đến các model trùng nhau.\n\nDù số điện thoại lớn, Argentis mới bắt đầu sưu tầm từ 2018. Bộ sưu tập của ông được đánh giá đa dạng, từ thiết bị Nokia, Motorola đời cũ đến các model mới ra mắt gần đây.', 'tintuc3.png', 1, '2023-11-29 02:03:34', '2023-11-29 02:03:34'),
(27, 'Samsung sắp ra \'AI Phone\'', 'Samsung đã nộp đơn đăng ký nhãn hiệu AI Phone và công bố nền tảng Gauss AI, cho thấy nhiều khả năng Galaxy....', 'Samsung đã nộp đơn đăng ký nhãn hiệu AI Phone và công bố nền tảng Gauss AI, cho thấy nhiều khả năng Galaxy S24 sẽ là smartphone AI đầu tiên của hãng.\n\nTheo SamMobile, trong vài tháng qua, Samsung đã đăng ký nhãn hiệu cho nhẫn thông minh và kính AR, nhưng công ty Hàn Quốc sẽ không dừng ở đó. Họ đang tìm cách sở hữu bản quyền nhãn hiệu \"smartphone AI\" và \"AI Phone\" tại châu Âu và Anh.\n\nNhư nhiều hãng khác, Samsung đang muốn tận dụng tối đa từ khóa AI sau khi ChatGPT tạo nên cuộc đua về trí tuệ nhân tạo. Đầu tháng 11, công ty đã công bố nền tảng Gauss AI và cho biết sẽ tích hợp lên các thiết bị của hãng thời gian tới. Một số nguồn tin cho rằng thiết bị đầu tiên hỗ trợ Gauss AI chính là điện thoại Galaxy S24, dự kiến ra mắt ngày 17/1 tại San Francisco.', 'tp1.png', 1, '2023-11-29 01:55:56', '2023-11-29 01:55:56'),
(28, 'Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần', 'Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai....', 'Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.\n\nGoogle cho biết việc xóa tài khoản sẽ diễn ra từ ngày 1/12. Chính sách này được hãng thông báo tới người dùng vào tháng 5.\n\nNhững tài khoản được tạo nhưng sau đó người dùng không bao giờ truy cập lại sẽ bị loại khỏi hệ thống đầu tiên. Tiếp đến là các tài khoản không được mở trong ít nhất hai năm. Những dịch vụ Google liên kết với tài khoản như Gmail, Docs, Drive hay Photos cũng bị xóa sổ theo.\n\nTuy nhiên vẫn có một số trường hợp ngoại lệ. Ví dụ, tài khoản cũ nhưng có kênh YouTube đang hoạt động, tài khoản có số dư thẻ quà tặng Google hay tài khoản đang dùng mua sách, phim và dịch vụ trên Google Play vẫn được giữ lại.', 'tintuc2.png', 1, '2023-11-29 01:58:37', '2023-11-29 01:58:37'),
(31, 'Google Drive gặp lỗi lạ gây mất dữ liệu', 'Một người dùng tại Hàn Quốc cho biết tài khoản Drive của mình bị quay lại thời gian tháng 5, dẫn đến....', 'Một người dùng tại Hàn Quốc cho biết tài khoản Drive của mình bị quay lại thời gian tháng 5, dẫn đến dữ liệu được tải lên hoặc khởi tạo sau mốc này không còn hiển thị trên dịch vụ lưu trữ. Người này cũng không tìm thấy lịch sử hoạt động sau tháng 5 hay bất kỳ file nào trong thùng rác. Anb cũng không đồng bộ hay chia sẻ dữ liệu với bất kỳ ai. Ngoài ra, dữ liệu không xuất hiện trở lại sau khi thực hiện quy trình khôi phục theo hướng dẫn của bộ phận hỗ trợ khách hàng từ Google.\n\nMột số người dùng khác cũng phản ánh dữ liệu được tải sau tháng 5 đã không còn, trong khi số khác cho biết sự cố ảnh hưởng đến cả những file được tải lên trong một hoặc hai năm qua.\n\nGoogle cho biết đang điều tra sự cố, nhưng chưa nói rõ về quy mô và mức độ ảnh hưởng. Trong thời gian xử lý, hãng đề nghị người dùng không nên thực hiện bất kỳ thay đổi nào trên Google Drive. Hiện vấn đề chưa tác động đến người sử dụng Google Drive phiên bản web hay ứng dụng di động.\n\nBên cạnh Drive, dịch vụ Google Search Console cũng gặp lỗi và ngừng hoạt động vào tối 27/11. Chuyên gia Daniel Waisberg của Google xác nhận với câu đùa: \"Tôi đang tìm phích cắm để sạc điện thoại nên phải rút phích cắm của máy chủ\". Sự cố hiện đã được khắc phục.\n\nGoogle Search Console là dịch vụ miễn phí với nhiều chức năng quan trọng giúp quản trị website và cải thiện hiệu suất, cũng như kết quả SEO.', 'tintuc5.jpg', 1, '2023-11-29 02:18:37', '2023-11-29 02:18:37'),
(32, 'Ảnh dựng iPhone SE 4 với nút Action và camera 48 chấm', 'Video về iPhone SE thế hệ tiếp theo được kênh 4RMD thực hiện dựa trên các tin đồn và ảnh thực tế bị lộ....', 'Video về iPhone SE thế hệ tiếp theo được kênh 4RMD thực hiện dựa trên các tin đồn và ảnh thực tế bị lộ gần đây của sản phẩm. Máy thay đổi lớn về thiết kế khi sử dụng màn hình tràn viền thay vì có Touch ID. Sản phẩm dùng \"tai thỏ\", không có Dynamic Island như iPhone 15 mới nhất.\n\niPhone SE 4 được kỳ vọng có màn hình 6,1 inch tấm nền OLED, pin dung lượng 3.240 mAh. Theo Gizchina, thông số thực tế có thể thay đổi khi Apple chuyển sang dùng LCD để tiết kiệm giá thành nhưng tăng thời lượng pin. Model iPhone SE 3 hiện có pin khá nhỏ là 2.018 mAh.\nĐể cân đối giữa giá và tính năng sản phẩm, iPhone SE 4 có thể kết hợp các tính năng của iPhone 14 và iPhone 15. Máy sẽ có nút Action Mode ở cạnh bên, hệ thống chỉ một camera nhưng độ phân giải cao 48 megapixel, hỗ trợ quay video 4K. Cổng kết nối cũng là USB-C để đồng bộ với toàn bộ dải sản phẩm của Apple hiện tại.\n\nVới giá dự kiến rẻ nhất trong dải sản phẩm iPhone, model SE 4 có thể dùng chip A15 Bionic. Một số nguồn tin cho biết máy có thể ra mắt vào đầu 2024.', 'tintuc6.jpg', 1, '2023-11-29 02:19:19', '2023-11-29 02:19:19'),
(33, 'Ảnh thực tế Galaxy S24 Ultra', 'Theo PhoneArena, những hình ảnh mới về S24 Ultra cho thấy sản phẩm vẫn giữ những nét đặc trưng của dòng....', 'Theo PhoneArena, những hình ảnh mới về S24 Ultra cho thấy sản phẩm vẫn giữ những nét đặc trưng của dòng Ultra như mặt lưng với cụm camera tách rời cùng khung sườn vát phằng hai đầu và bo cong hai cạnh.\nĐiểm khác biệt là màn hình được làm phẳng hoàn toàn thay vì bo nhẹ như trên S23 Ultra hay các tin đồn trước đó. Màn hình cong là một trong những điểm gây tranh cãi nhất trong thiết kế các model Galaxy S Ultra trước đây vì dễ bị hư hỏng cũng như giảm trải nghiệm người dùng. Màn hình mới cũng được cho là sẽ dùng tấm nền LPTP có viền siêu mỏng với kích thước các viền bằng nhau cùng độ sáng cao 2.500 nit so với 1.750 nit hiện nay.\n\nGalaxy S24 Ultra có kích thước 162,3 x 79 x 8,6 mm, nhỏ và mỏng hơn một chút so với 163,4 x 78,1 x 8,9 của S23 Ultra. Một nâng cấp thu hút sự chú ý dự kiến có trên sản phẩm là khung titan tương tự iPhone 15 Pro và 15 Pro Max. Tuy nhiên, trọng lượng máy gần như không giảm do Samsung vốn đã sử dụng nhôm siêu nhẹ cho smartphone của mình, thay vì thép như trên iPhone.\n\nCamera chính sẽ trang bị cảm biến 200 megapixel thế hệ mới còn ống tele có thể chuyển sang cảm biến 50 megapixel so với 10 megapixel hiện nay, nhưng khả năng zoom quang giảm từ 10x xuống còn 5x.\nGalaxy S24 Ultra tích hợp chip Snapdragon 8 Gen 3. Ngoài ra, một số nguồn tin cho biết dòng Galaxy S24 còn trang bị công nghệ trí tuệ nhân tạo với các tính năng \"vượt xa những gì đang có trên Google Pixel 8 series\" để trở thành điện thoại AI thông minh nhất.\n\nSamsung dự kiến công bố bộ ba Galaxy S24 vào ngày 17/1/2024 tại San Francisco.', 'Tintuc7.jpg', 1, '2023-11-29 02:20:13', '2023-11-29 02:20:13'),
(34, 'Đánh giá robot hút bụi lau nhà Ecovacs giá 25 triệu đồng', 'Ecovacs Deebot X2 Omni nổi bật với thiết kế không \"khối u\" nhờ cảm biến lidar thế hệ mới, hệ thống lau....', 'Ecovacs Deebot X2 Omni nổi bật với thiết kế không \"khối u\" nhờ cảm biến lidar thế hệ mới, hệ thống lau nhà nước nóng nhưng phần mềm chưa hỗ trợ tiếng Việt.\nƯu điểm:\n- Giặt giẻ nước nóng, sấy khô giẻ bằng khí nóng tích hợp\n- Lau hiệu quả bằng giẻ xoay, có thể nâng giẻ 1,5 cm\n- Lực hút mạnh, chổi hút chống rối\n- Thiết kế cao cấp, khác biệt so với đối thủ\n- Camera nhận diện và tránh vật thể tốt, có thể xem trực tiếp như camera an ninh\n- Dock thiết kế gọn, có đèn LED báo trạng thái khi hết nước\n\nNhược điểm:\n- Phần mềm, trợ lý ảo chưa hỗ trợ tiếng Việt\n- Không có hộc chứa nước tẩy rửa chuyên biệt riêng (phải mua thêm phụ kiện).\n- Một nút bấm cảm ứng chưa thực sự thân thiện khi sử dụng.', 'tintuc8.jpg', 1, '2023-11-29 02:21:06', '2023-11-29 02:21:06'),
(35, 'Bill Gates: \'Con người có thể chỉ làm ba ngày mỗi tuần nhờ AI\'', 'Tỷ phú công nghệ Bill Gates cho rằng AI sẽ giúp con người giảm đáng kể thời gian lao động, nhưng vẫn....', 'Tỷ phú công nghệ Bill Gates cho rằng AI sẽ giúp con người giảm đáng kể thời gian lao động, nhưng vẫn tạo ra đủ lượng của cải cho xã hội.\n\n\"Trong tương lai gần, sự gia tăng năng suất đạt được từ trí tuệ nhân tạo là điều rất thú vị. AI có thể giúp con người loại bỏ những phần công việc nhàm chán\", Gates nói trên kênh podcast What Nows của Trevor Noah tuần qua.\n\nHiện nhiều chủ doanh nghiệp xem tăng ca là biện pháp giúp tận dụng tối đa nguồn lực từ nhân công. Tuy nhiên, theo nhà đồng sáng lập Microsoft, tình trạng này sẽ giảm bớt một khi AI có thể tham gia vào nhiều quy trình và người lao động không còn phải làm việc một cách vất vả. \"Cuối cùng, chúng ta có một xã hội nơi con người chỉ cần làm ba ngày mỗi tuần\", ông nói.\n\nBill Gates cũng cho rằng cuộc sống không nên chỉ xoay quanh công việc. Với thời gian rảnh rỗi tăng thêm nhờ AI, con người có thể dành sự quan tâm đến nhiều vấn đề của xã hội, ví dụ chăm sóc người già. Nói cách khác, ông đánh giá nhu cầu làm việc để tạo ra những thứ tốt đẹp không mất đi, nhưng sức lao động sẽ được khai thác theo hướng hiệu quả hơn.\"Chatbot thông minh gấp 100 lần, luôn sẵn sàng phục vụ và chi phí chỉ bằng 1/100 những gì tôi phải trả cho nhóm nhân viên cũ\", ông nói.\nĐến tháng 9, Indeed, nền tảng tìm việc làm hàng đầu thế giới, cũng sa thải lượng lớn nhân viên tuyển dụng nhưng giữ nguyên cấu trúc bộ phận AI của công ty. CEO Chris Hyams cho biết muốn tạo ra một nhà tuyển dụng cyborg - kết hợp giữa người và máy, để tận dụng ưu thế của cả hai.', 'tintuc9.jpg', 1, '2023-11-29 02:21:52', '2023-11-29 02:21:52'),
(36, 'Musk đặt câu hỏi về \'điều đáng sợ\' khiến Sam Altman bị sa thải', 'Ông chủ X ngày 20/11 đặt nghi vấn OpenAI đang phát triển một công nghệ nguy hiểm. \"Tôi rất lo lắng. Ilya....', 'Ông chủ X ngày 20/11 đặt nghi vấn OpenAI đang phát triển một công nghệ nguy hiểm. \"Tôi rất lo lắng. Ilya là người có đạo đức và không ham muốn quyền lực. Ông ấy sẽ không hành động quyết liệt như vậy trừ khi thật cần thiết. Thế giới cần biết nếu OpenAI sở hữu thứ gì đó gây nguy hiểm cho nhân loại\", Musk cho hay.\n\nKhi một người dùng X cho rằng có \"biến số bùng nổ\" tại OpenAI chưa được tiết lộ với công chúng, Musk đáp: \"Chính xác\".\n\nElon Musk từ lâu đã cảnh báo về hiểm họa của AI đối với nhân loại, dù vẫn khẳng định công nghệ này có nhiều điểm tốt và phát triển sản phẩm cạnh tranh với ChatGPT.\n\nÔng là người đồng sáng lập OpenAI năm 2015 và giúp thu hút nhiều nhân tài chủ chốt, trong đó có Sutskever, nhưng rời công ty sau đó vài năm vì bất đồng. Tỷ phú than phiền rằng OpenAI từng được kỳ vọng là tổ chức phi lợi nhuận đối trọng với thế thống trị AI của Google, nhưng đã trở thành \"công ty mã nguồn đóng, theo đuổi lợi nhuận tối đa do Microsoft kiểm soát\".\n\nSutskever là nhà đồng sáng lập kiêm nhà khoa học trưởng của OpenAI. Sự khác biệt trong định hướng phát triển AI của ban quản trị và CEO được cho là nguyên nhân khiến Altman bị sa thải hôm 17/11. Đến 20/11, hơn 700 nhân viên công ty, trong đó có Sutskever, đồng loạt ký vào thư dọa nghỉ việc trừ khi Altman quay về.\n\nSutskever, nhân vật chính đứng sau vụ lật đổ, bày tỏ hối hận về hành động trước đó của mình. Ông không có chân trong hội đồng quản trị mới, nhưng vẫn là nhà khoa học trưởng, phụ trách nghiên cứu và phát triển các sản phẩm của công ty.\n\nOpenAI không hé lộ nguyên nhân sa thải Altman, nhưng Reuters dẫn nguồn nội bộ cho biết CTO OpenAI Mira Murati nói với nhân viên rằng một bức thư mật, do một số nhà nghiên cứu OpenAI gửi tới hội đồng quản trị cũ, về bước đột phá của dự án Q* (Q-Star) đã thúc đẩy họ hành động và ra quyết định hạ bệ Altman.\n\nQ* là trí tuệ nhân tạo tổng quát (AGI) được OpenAI phát triển song song với ChatGPT. Theo định nghĩa của công ty, AGI là hệ thống siêu trí tuệ toàn năng, thông minh hơn con người. Sự thể hiện xuất sắc của nó khiến nhiều người lạc quan về tương lai của siêu trí tuệ, nhưng số khác lại lo ngại Q* có thể đe dọa nhân loại nên đã gửi thư cảnh báo.', 'tintuc10.jpg', 1, '2023-11-29 02:22:29', '2023-11-29 02:22:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` char(36) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('a81f77857d498716573bcebc18df4392b17ac1abbda3a4764539093f08cae60cc00ea6a1df74d046', 3, '9a857a32-d24c-488e-b065-23c21d1c233b', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-02 20:19:01', '2023-11-02 20:19:01', '2024-05-03 03:19:01'),
('11478b5c65121101743949e5392a3cc1a25105958f581a699f49677287bed598558bfb03273794fd', 3, '9a857a32-d24c-488e-b065-23c21d1c233b', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-02 20:19:15', '2023-11-02 20:19:15', '2024-05-03 03:19:15'),
('00d0c4b29a2253eee79e2c5affe9cb2791434d0ab94dc743f44af7cd00776eca17e8100b1849ab71', 4, '9a857a32-d24c-488e-b065-23c21d1c233b', 'huyxuan223@gmail.com', '[]', 0, '2023-11-02 20:33:06', '2023-11-02 20:33:06', '2024-05-03 03:33:06'),
('2a38a5d2a759c96f18a7bd157276b2046649f5fbac7a4ea90fd0a9b1109c1375f29746be3bd2e186', 4, '9a857a32-d24c-488e-b065-23c21d1c233b', 'huyxuan223@gmail.com', '[]', 0, '2023-11-02 20:33:26', '2023-11-02 20:33:26', '2024-05-03 03:33:26'),
('b8f06bd4034fa1484b168af18cc9839208d18f4a0952b3f96b639f3d98020d8851962400273758e0', 4, '9a857a32-d24c-488e-b065-23c21d1c233b', 'huyxuan223@gmail.com', '[]', 0, '2023-11-03 19:20:30', '2023-11-03 19:20:30', '2024-05-04 02:20:29'),
('e20ccaabe715d956f7a97893e656c6345c9e19d3f3f23f6f20a725a8a94b71bd2559e9a52f50f468', 10, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'hungda693@gmail.com', '[]', 0, '2023-11-07 18:35:38', '2023-11-07 18:35:38', '2024-05-08 01:35:38'),
('474c3d92431e5820190c6e22973d6c7c63d4bed6d1f46a78273816ed1d869ab6b2effb4be0dd88b3', 10, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'hungda693@gmail.com', '[]', 0, '2023-11-07 18:36:42', '2023-11-07 18:36:42', '2024-05-08 01:36:42'),
('7a3f68c715f4df22d600aebb0fd03e9cc8b0e2252500cef0d463656cf9dccced75c4ec4718be6886', 11, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'tien20062001@gmail.com', '[]', 0, '2023-11-07 18:38:16', '2023-11-07 18:38:16', '2024-05-08 01:38:16'),
('bc5edae07181ce018d158148169350a32e414b34012d12286b04c0b474bfea6294801bedb435f877', 12, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'hungda693@gmail.com', '[]', 0, '2023-11-07 20:05:55', '2023-11-07 20:05:55', '2024-05-08 03:05:55'),
('453be3763e68c3c95d9c8a336c177b8a9adca6386a94c9c0088a613a107a70c3da9207bfb9e8a575', 13, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'hungda693@gmail.com', '[]', 0, '2023-11-07 20:06:14', '2023-11-07 20:06:14', '2024-05-08 03:06:14'),
('b90b1bd77719f72c8e92d969e9de80220a1cd2550b2f0faa8b8da0d5426ea1371d048ddaebadf880', 14, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'hungda693@gmail.com', '[]', 0, '2023-11-07 20:16:37', '2023-11-07 20:16:37', '2024-05-08 03:16:37'),
('3cba5868cc39967dba0698d78fb41fd7662ce5f0656b7d99e6956cdbb63bcdd532334f0e175aa394', 11, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'tien20062001@gmail.com', '[]', 0, '2023-11-07 21:13:37', '2023-11-07 21:13:37', '2024-05-08 04:13:37'),
('022af5a4b09a2f3cace0aade7ada7291167eb455e258363fc34ed96069678b51e0272785b81799c5', 11, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'tien20062001@gmail.com', '[]', 0, '2023-11-07 21:15:03', '2023-11-07 21:15:03', '2024-05-08 04:15:03'),
('9186896c481e4e0a2c0be6fd5710e613608a5a1f34554564e4252f15806775ae885dbc9bcacecef5', 11, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'tien20062001@gmail.com', '[]', 0, '2023-11-07 21:16:29', '2023-11-07 21:16:29', '2024-05-08 04:16:29'),
('40b274429fdd3b40bc56e8fd06854da9ca56b3baf7a8240d92231d08bcb71c1dfa4e687b15cf8061', 11, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'tien20062001@gmail.com', '[]', 0, '2023-11-07 21:17:18', '2023-11-07 21:17:18', '2024-05-08 04:17:18'),
('cd7ba046efbba2b0c1236a5656df23da03b863dfa9d9ada9d194fa72897db62d6c5a6e88d83c09e7', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-07 22:44:23', '2023-11-07 22:44:23', '2024-05-08 05:44:23'),
('45c6ded1bdf2e05d10255febaa68a395287f645986a690af2a609d57a5cb1f0125ee937e553678a8', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-07 23:29:19', '2023-11-07 23:29:19', '2024-05-08 06:29:19'),
('9a4020d6bd37aaa94948f3d837be4bc0b04d833ff90fbcf020da104301a7e87a1438b6024bf44ba2', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-07 23:31:49', '2023-11-07 23:31:49', '2024-05-08 06:31:49'),
('9306d795d2e7b9ae7714ec6692a2ac40f43f3c7be08ebf8405c7e5706077330e23c91bcd49d48ae2', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-07 23:51:12', '2023-11-07 23:51:12', '2024-05-08 06:51:12'),
('f7eb271fbf7887ce69359057df8162a5c4cabdfd8909e779f9d83a5a3a8eb3369dc674d37165ca10', 15, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-08 19:52:34', '2023-11-08 19:52:34', '2024-05-09 02:52:34'),
('df89ac07c3af03f97b89684b2a1894ef333e3991a0a2d6657d51eb8ff79b3f02e39d4bcd9be9847d', 16, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-08 20:03:09', '2023-11-08 20:03:09', '2024-05-09 03:03:09'),
('08a6fcf943431880e6cfc2df38b3808231f5ae4ab2277704481555613fea2f1e69736e7d83c0edbd', 17, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-08 20:03:34', '2023-11-08 20:03:34', '2024-05-09 03:03:34'),
('38ef6a489fb789e64c3b54c31c7e9dec8f4b66e5fb2f03f254c82404e8a63ac958d5d2da7ab9e813', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-08 20:16:24', '2023-11-08 20:16:24', '2024-05-09 03:16:24'),
('1a843113992a146159866b6a3e1de251e0428eff24f84a60ae36b1403e18c4c25fa684935aa0e56a', 18, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-08 20:17:50', '2023-11-08 20:17:50', '2024-05-09 03:17:50'),
('adfbb7f48146a38cf934d01cc2477d7367ec0a324864ab5cff44dedb7129ea57103065837d557b39', 18, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-08 20:18:09', '2023-11-08 20:18:09', '2024-05-09 03:18:09'),
('45f0f5aeaac986b2e989bfb6b3fe833176e8f434c9d1a130fbda2cc6b9da94af2e0a872034a18495', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:13:51', '2023-11-08 23:13:51', '2024-05-09 06:13:51'),
('ead3ddcdca44c99d131a83e23397b642331377a67babc8fcf7b0dd0bc268656dd1f838ac9e3b405a', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:14:33', '2023-11-08 23:14:33', '2024-05-09 06:14:33'),
('34c960b86a23451e21bc74887ddd3efa8ebc17f64f47e43b5e58c2e2e57319d2b49c0dde7bb4b531', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:15:52', '2023-11-08 23:15:52', '2024-05-09 06:15:52'),
('c6a129b3937056b772e3503b3b374b5dac96f091d6d8ba536035bb1b1583cceb6e03179e43726a2a', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:24:26', '2023-11-08 23:24:26', '2024-05-09 06:24:26'),
('15d0ee317bf5b49cfad9e2c961b8444c18ecadd4b6b08149365a1dd637890683e59582e4b230cfe8', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:29:55', '2023-11-08 23:29:55', '2024-05-09 06:29:55'),
('c26f8fe28562f4e4bd1fe5572a4d7cf32397da69ea29117c3f36beb0f5dc83b2bcd847875351b373', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:30:32', '2023-11-08 23:30:32', '2024-05-09 06:30:32'),
('155cd877006b60360a8df843309388158da75d2175a2f531524a03114454227e677241b3c97acfec', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:33:32', '2023-11-08 23:33:32', '2024-05-09 06:33:32'),
('c49fe8989258a730a0b59b2f80935eb1f1711931a9c28d301dd90acbb0329e0bd3b39d2cafabd95c', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:42:43', '2023-11-08 23:42:43', '2024-05-09 06:42:43'),
('72219513e0b50085761ef40430c196440ac082123fc623a7940775df6a94a64f5938359b81008eea', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:48:35', '2023-11-08 23:48:35', '2024-05-09 06:48:35'),
('6793bb7befeb706c6be3752bcba285f49180b14bd8d672de4bc96d1917f9f978317e46a86699686e', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:50:01', '2023-11-08 23:50:01', '2024-05-09 06:50:01'),
('449a7a894796c0745fbba446b7e610706fb2b3ac7249b393741ca15b260e22e40c9d68a4a6b99d67', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:51:52', '2023-11-08 23:51:52', '2024-05-09 06:51:52'),
('460201d0632f24df6dc3e458113867c645fb19f69f73adfae390a04c180266ae35182e09a9b4aef2', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:52:26', '2023-11-08 23:52:26', '2024-05-09 06:52:26'),
('e2dae122995d96a3cd6afea2f3b4192a7f42e4ea7b1cc0b26940640bb447a03cc1b9b7bd79a59a92', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:53:03', '2023-11-08 23:53:03', '2024-05-09 06:53:03'),
('e3db9e5233c482719b1e9d85025ae3067bf283f2efc2009d90964ddb11c61bff160e093c7466d193', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-08 23:54:51', '2023-11-08 23:54:51', '2024-05-09 06:54:51'),
('ec47e13fe863c2d49fd8822dfcbfbca1e03f15fd49438592a19eb934bd88ff1adab313ce74ee1f1d', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-08 23:55:22', '2023-11-08 23:55:22', '2024-05-09 06:55:22'),
('511691b55ee37e79943f60d534a7d9b0182145b898f18a050a60ef4d0668b6a5e3a12e26ae5d4502', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:05:28', '2023-11-09 00:05:28', '2024-05-09 07:05:28'),
('4857773b9023127afb017068b08087562a5b955c996ab1cb3ec7f1effc53e5ff4cdf5638074f439e', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:14:19', '2023-11-09 00:14:19', '2024-05-09 07:14:19'),
('64ef7f48cc499307b6d7ebfc27fb0cbf3a8ed07a848838c6829e17cf22b82a4ec4bc9278ce6022b9', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:24:16', '2023-11-09 00:24:16', '2024-05-09 07:24:16'),
('2f76c292cfefd91b27345671a4d13facc774d78e9ed9420d1fb1ec16dc56a4dd16e87d23c573ea1f', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:27:53', '2023-11-09 00:27:53', '2024-05-09 07:27:53'),
('2c0556e0c94fdc158387e9598f9d3f14fb61290cefdc8176c569a33bf3dd15b2e5ab9df25875c57e', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:30:35', '2023-11-09 00:30:35', '2024-05-09 07:30:35'),
('cc1456628584182237edcf3ce2a140ee4cb73268dd88e631b3dfba51481cafceb449f940a6fd12ca', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:32:16', '2023-11-09 00:32:16', '2024-05-09 07:32:16'),
('e4d66b8a211d3436c9e06ff217ec3638962a5170c0ef12454e3b08cb5926e05c7836b68768f6f64a', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:43:06', '2023-11-09 00:43:06', '2024-05-09 07:43:06'),
('277c91ee69be854c952989a9bd11a3d7d9cb07e88eeb0dbac8504fb91b9116f3f4f0b7117a93621d', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:50:11', '2023-11-09 00:50:11', '2024-05-09 07:50:11'),
('b3a2a3a582556066cb85beecaef0a8ea54d90ed7623b5f8524b9b9d511175c83a5fd49f970d6e642', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:50:19', '2023-11-09 00:50:19', '2024-05-09 07:50:19'),
('b66e99fb6c038c20dc086fc39c52ca5dd421f7b4bc2d5029f7168e65984071a27372a852ce869e76', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:50:27', '2023-11-09 00:50:27', '2024-05-09 07:50:27'),
('a01d626acf618ff6a955ec4dfa3f38c61ff68ee17b3b45f0d00829de68f76e52d6193e796004e8b0', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:50:58', '2023-11-09 00:50:58', '2024-05-09 07:50:58'),
('464d2493868b7e84e9c5459d7d50cbf7ba626ab886a5a77ce114b02d35ce271cc4dafee2ac7ecded', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:54:44', '2023-11-09 00:54:44', '2024-05-09 07:54:44'),
('063aaece6789437399585fba19dd8eef635caff7a074ad58235f110f1a9b0d0b30d39f364e1e1ca2', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 00:57:20', '2023-11-09 00:57:20', '2024-05-09 07:57:20'),
('3eb2e5b0add93c60e9c60047334d57292ecbadd8e8a3337a019df96916555bc7f961c4da20dbf43e', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 00:57:51', '2023-11-09 00:57:51', '2024-05-09 07:57:51'),
('6a2477b8b666e34e0d93e41c3359756aaf904c998d2c0031c8c2e2843a200743b257a067e22fed40', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 00:59:16', '2023-11-09 00:59:16', '2024-05-09 07:59:16'),
('3514cfddcd5e8e943e8a1b8d104ab9a37e45013162e9c85895409736b3001cdb7bfd73165f975ab6', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:02:57', '2023-11-09 01:02:57', '2024-05-09 08:02:57'),
('c8ee2344d9b52eb92cbb3fe950b6739f5fc6aad33a934258112d3260b72db7d76dd36960a80b29c3', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:03:34', '2023-11-09 01:03:34', '2024-05-09 08:03:34'),
('449d46b083436ac99a06b31dd792a917ff2b17e4f466632ee42c29790109f80355cff04271500714', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:06:47', '2023-11-09 01:06:47', '2024-05-09 08:06:47'),
('b73f434cd59837886b4768c2dbc84622a0ad9e46fa6883f93160720966138f99714bd0d202b927d9', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:14:10', '2023-11-09 01:14:10', '2024-05-09 08:14:10'),
('ebd5f4aa81d0c103b015566b27d746779c5492024062a31600feb38fdadb05698b3475773a4ff253', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:15:22', '2023-11-09 01:15:22', '2024-05-09 08:15:22'),
('3d494046f334898a69b35a9e85788ef7345ff48c6428f18edb1c45827834bc0e33fe58b68d34f1c6', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:21:19', '2023-11-09 01:21:19', '2024-05-09 08:21:19'),
('4b763502fcb28dd47855799ee246178e1d636f235170d727a10efd06adbc301f15bd09a3c365f90a', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:27:18', '2023-11-09 01:27:18', '2024-05-09 08:27:18'),
('7c466e63cae5a38050b779b0f2d9820b1d0d24604bedd97faf11b54e721d687b80cde0ac86406c52', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:31:28', '2023-11-09 01:31:28', '2024-05-09 08:31:28'),
('2abf72307e9ded8022e014da69f180ffc1b4a2a5a58dde3dec928d818bab20adac5c0e466a1439b0', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:36:09', '2023-11-09 01:36:09', '2024-05-09 08:36:09'),
('30f0e2eba9844a74564ecabbfbb66d8d96b84d0f45515c4a2d1a33e19e633cb87ee36f4a99772876', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:36:22', '2023-11-09 01:36:22', '2024-05-09 08:36:22'),
('e0bdd9d6bc3d8b7d95f695932594720e9f99d42305fee80e366d75bf3cbcf30784c035476abaf322', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:39:46', '2023-11-09 01:39:46', '2024-05-09 08:39:46'),
('f3b9aa0a384bd1130cac200f0db98319f9a89743547a245d9b2a0ef87dc46599741c4d3c69716dd9', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:40:08', '2023-11-09 01:40:08', '2024-05-09 08:40:08'),
('8085cb4645ab509e57f17baa74f2047245e707fb408e57420a7ecf919f41bf7634d920da5d4ec74d', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:46:53', '2023-11-09 01:46:53', '2024-05-09 08:46:53'),
('be7be7d9d600247aa615c737deba5508a24eb0000398dd5bd6b6f1fa178c05f852fe66467434ff04', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:47:12', '2023-11-09 01:47:12', '2024-05-09 08:47:12'),
('29d3905f7e7ca779328a67872fc5f4ca5138d9bce7b400ae05f165b222aba29f3622a3022977d8c7', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:49:13', '2023-11-09 01:49:13', '2024-05-09 08:49:13'),
('00fa6a841a98392bba34c9b7a582af9c02880eb60ef0a0285893fba1e8d6236a3c922762b18b297c', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:49:52', '2023-11-09 01:49:52', '2024-05-09 08:49:52'),
('7bd4817115657fb2b1e92393100ad6afbb09a95666b5b22042206f023d20771e7edb3154498cc393', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:52:48', '2023-11-09 01:52:48', '2024-05-09 08:52:48'),
('c5a09b882d3aa50e181ca5e113b5c3d3bc7c765c8b863e42b9e36f0dc307101232de7c45c318f831', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 01:57:27', '2023-11-09 01:57:27', '2024-05-09 08:57:27'),
('8d2834a9f7a57230bf7f7a3243462dea448c5be7c1f067e22d347aba386d62ecedfac655cde5dec7', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 01:58:25', '2023-11-09 01:58:25', '2024-05-09 08:58:25'),
('3267647c6c1e2336b686d973dc298a1846bdd3a7015ccdabe8acff53990fe44bc2972dc46cda299d', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:02:36', '2023-11-09 02:02:36', '2024-05-09 09:02:36'),
('9f8dc28ea7edfe5a16d8db2c1a30ec5fae77abf423c591e0fb430550f0ecb1cad76895c3c0055b3b', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:05:10', '2023-11-09 02:05:10', '2024-05-09 09:05:10'),
('d5ed477233555cd2a1cf463f06c0d3152d8f02a275fb075c00b1cad359f6ce6de7eec954ed6e7cda', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:05:42', '2023-11-09 02:05:42', '2024-05-09 09:05:42'),
('85f7597820fc35a797d0b7275e3c818d815bc8149e86fc0797ac6648ca84b52be227b78ed4bf3141', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:06:34', '2023-11-09 02:06:34', '2024-05-09 09:06:34'),
('cb406812acf1ff8b2f3d296ff1dff0187a108bb9060512fa61d9467cabf300705ab778aec74acbc3', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:06:57', '2023-11-09 02:06:57', '2024-05-09 09:06:57'),
('3b69f294a729479beae38104e1fe49418e847846e8b8ef68e59620e12de34c4f5dbf2a0b6bf97a71', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:07:48', '2023-11-09 02:07:48', '2024-05-09 09:07:48'),
('7c0df5e0f216d1112afeb44a78c4d05ae8cac1585e5f843d45f45e89f4e4c7da38d161027a70e448', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:08:00', '2023-11-09 02:08:00', '2024-05-09 09:08:00'),
('e05df6fa981aebc1eaf590b5bec1116087967eff9a8bb8094cb10df00b34ff57d24b05d738085bcb', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:08:25', '2023-11-09 02:08:25', '2024-05-09 09:08:25'),
('421d0b0727a2d2233f18bc79d919d3889a8499f6fefdc0b66507a4c2a2bbb2721ca539019047c991', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:09:01', '2023-11-09 02:09:01', '2024-05-09 09:09:01'),
('7610f9180846504c00eead23eb1b775556996601c3584b3c6940c71aeda2f118d77e0c6aeedcf6e5', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:11:50', '2023-11-09 02:11:50', '2024-05-09 09:11:50'),
('3a067f20cfb59ee0a74d6ab4e19a67ab2d24a6a7e7d11641231d059f19f8fd1c1cfa927687cdc12f', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:13:04', '2023-11-09 02:13:04', '2024-05-09 09:13:04'),
('9d0fcbed36e921a296e2901db2cb63a97514414970aa7772b86377e71237f1c4dca074276adfd8eb', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:13:24', '2023-11-09 02:13:24', '2024-05-09 09:13:24'),
('7a0abee26bf2f4bb69e87c205d09080668e4f865878b06891e4cbb9c7b2a6f35447267c2d81b3d48', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:14:12', '2023-11-09 02:14:12', '2024-05-09 09:14:12'),
('42e85a2365d8e71e515cf176a09706657c7ccf9f7eae46a1baf7769c63ce9cb4ff5aff711a6d5a4e', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:14:41', '2023-11-09 02:14:41', '2024-05-09 09:14:41'),
('4cecbae5b8d5024086eafa0d535099fbec2d8c564d848e9a56c33a425c654a2805719d577253fa61', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:14:43', '2023-11-09 02:14:43', '2024-05-09 09:14:43'),
('2b57159bc45031e887f3e6034cbc6e02fd6a34af870283f607fa4c0abe7dac01c0d158b0a56883a6', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:15:01', '2023-11-09 02:15:01', '2024-05-09 09:15:01'),
('c8e96d5b09bed5a283994f0e9e7e363dafc37fbcfc62c1954df0f0e3c3dc2f93e0a0d094ed1f4230', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:15:03', '2023-11-09 02:15:03', '2024-05-09 09:15:03'),
('a34887d29989e7e8f3802a94107d8d8123b4a8f24b1b893f31d2c73f3e2d0041a2c246f778a8a9f8', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:15:07', '2023-11-09 02:15:07', '2024-05-09 09:15:07'),
('e45bcdc071d4a5dd13b91555c7e14f848e5630ac0addc516b24b4021c99dac5389b05314aab19f0d', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:15:28', '2023-11-09 02:15:28', '2024-05-09 09:15:28'),
('4fd983fb1aa11b61ed0fc731d2890127d00398619b6777fff6a3ab2af4c09052891d1c64930b0e76', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:15:32', '2023-11-09 02:15:32', '2024-05-09 09:15:32'),
('c9fafbe091c2007ce7fe8834b1d92fa3b2863cdeacdd5d8f20d85330661966545b6532d34477fee1', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:15:42', '2023-11-09 02:15:42', '2024-05-09 09:15:42'),
('4fe1ecd5e3778cbb3cf5c6e7abda771778a383468ad78637c4d52eae5041d665b5cd5daa70c05be1', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:15:43', '2023-11-09 02:15:43', '2024-05-09 09:15:43'),
('143c04adf278350051e0d3622e580975ffd8f0d81b8b3b6e86e869c861c950649bf3529c4f6bd62f', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:16:51', '2023-11-09 02:16:51', '2024-05-09 09:16:51'),
('279525c206718d7f0339c22df208833b38e7c5d8f96ed558e33a8eade3b41330955f1b1506527490', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:16:56', '2023-11-09 02:16:56', '2024-05-09 09:16:56'),
('3e303102612c78e21cda991366b5d78781b312efd1f6881f4d0dd23c8f59e768cd79af08c39ca443', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:17:35', '2023-11-09 02:17:35', '2024-05-09 09:17:35'),
('6c047e5702026ff0f2fa1bd5f391c10153f4e044faf127fe8b8c2d17ef04ff8b4ff9599f66c40718', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:17:40', '2023-11-09 02:17:40', '2024-05-09 09:17:40'),
('2fd378383c2eb84ca4e5f30a9997e76f66b2e7df7da43e36e7e3a84ec9c12f024513d574aae8dfb0', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:17:59', '2023-11-09 02:17:59', '2024-05-09 09:17:59'),
('2bfaabb761c9109be0d466e4f8b90719fdcebcc4c233ad3b699e08acd5997bde587902410c66e88b', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:18:12', '2023-11-09 02:18:12', '2024-05-09 09:18:12'),
('1c2e3753a039b003c1aa9130438b401f0cd98708da02a8cb693dfada7cd980e181077c3f849f1b37', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:18:32', '2023-11-09 02:18:32', '2024-05-09 09:18:32'),
('10082bcd290742960b73a09b416fea1710ecfd64a02a1704a88fe3a2a34560cbc04a3e5a9a1840cd', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:18:44', '2023-11-09 02:18:44', '2024-05-09 09:18:44'),
('4881fc062ed14fe5866c32a178b88a39f9afee75a50b1e6fcecd8771e6608ed90b1a9fd8ea61a782', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:20:13', '2023-11-09 02:20:13', '2024-05-09 09:20:13'),
('e281a16b1f5030e28e1837f3f0769911b9d8f345e936df2d71d680db13a75eec8cb2945469ec56d7', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:22:30', '2023-11-09 02:22:30', '2024-05-09 09:22:30'),
('3d192b600250b94019686b8c0fa5f7cdf2f1fb4422d0f8305a1bdbef27395feae75678dde14f9450', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:22:58', '2023-11-09 02:22:58', '2024-05-09 09:22:58'),
('d6d652d1222086cb12a430841bb20de70adfae73b3b6bd68b2ac40052efc837517a5850d01e47679', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:25:48', '2023-11-09 02:25:48', '2024-05-09 09:25:48'),
('423b64fb57951d674da04d680a2f9f6e1c2352a16b73df6bac4a2bb534b906140be7ae0a67c398ec', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:26:27', '2023-11-09 02:26:27', '2024-05-09 09:26:27'),
('ed145df4bc06baff4e458fc973ff7eb2b6e99f2feb76e3187c2e4a19bb20c9b938c596c41f918631', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:27:55', '2023-11-09 02:27:55', '2024-05-09 09:27:55'),
('ea7e1aa2321fcbb59b3d0689e8dd273687a8670948c0dbcaaca398f2e7b7961f58b44eafb1f9719e', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 02:29:21', '2023-11-09 02:29:21', '2024-05-09 09:29:21'),
('b93cb5860153fe81c774b008339924eeedccfba8a4704d6a3663b883331d648c36671fe902a04f7b', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 02:30:00', '2023-11-09 02:30:00', '2024-05-09 09:30:00'),
('ebd6c928d065a187a955bf3fca065e1fde66b22c834fc15bdfaec434ea71fce96f94d07897542bb0', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-09 20:15:17', '2023-11-09 20:15:17', '2024-05-10 03:15:17'),
('c9ba8dbeed23a9535ea5bcac434e02353f924de0748bbcb9f44b357b113dfef76f8c8a4797bb5c83', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 20:15:32', '2023-11-09 20:15:32', '2024-05-10 03:15:32'),
('2c0edd08094e21ba13f9dbd7b007384e9e98da60494b3604ca4c8b4d538ba9c06c6cd530f51088a0', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 20:17:58', '2023-11-09 20:17:58', '2024-05-10 03:17:58'),
('00a2a309330da45fdc47ffce15d4cd733207b0065a3e4668773ade66b4629c2e0cf0743ff7a3da17', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-09 20:42:02', '2023-11-09 20:42:02', '2024-05-10 03:42:02'),
('2db46d9a8f77708a2ab60cd44cd824c14372ee2855e8253e00c5424480e050171b47af1c02e501dd', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-10 19:20:22', '2023-11-10 19:20:22', '2024-05-11 02:20:22'),
('b4160dc3bb951d9da4c04ddce2f64c0d919dbef0f2e39d5b87b25767358d65a531bae6eb31c0743c', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-10 19:34:20', '2023-11-10 19:34:20', '2024-05-11 02:34:20'),
('a5f810ed6716dda4a36350937d7add7039611a8cb72d0b66dc05f500838ae910b66ee91e9b8790d0', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-12 18:46:44', '2023-11-12 18:46:44', '2024-05-13 01:46:44'),
('da412906e2f137dfc288239a1b2d1ff5cd9f56d00e057a775551cf0ee98fc25207e35e03d3868e30', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-13 00:00:49', '2023-11-13 00:00:49', '2024-05-13 07:00:49'),
('f022056bd2a6346bc96ccb85862647f5c6997269ada8478e85331e0084bf3a579046fb9455189fd3', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-14 23:23:52', '2023-11-14 23:23:52', '2024-05-15 06:23:52'),
('e85f906d20ce81b3bbc5306bd544d716dae38a7b8885ca83fad5fddb1d4c1e84535e4f47f750cb19', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-15 18:14:37', '2023-11-15 18:14:37', '2024-05-16 01:14:37'),
('d530c1a6c71d74cbfda240c91fdc4c779620fc36e594a2899667b45e6043af6ed05d9dd367bfabe0', 3, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '21211tt4210@mail.tdc.edu.vn', '[]', 0, '2023-11-15 18:16:49', '2023-11-15 18:16:49', '2024-05-16 01:16:49'),
('2760222748188740f8547a91dac613493559e22716914b70eb4e4f554a0a0e10b745fda2c62a71bf', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-15 18:18:11', '2023-11-15 18:18:11', '2024-05-16 01:18:11'),
('261f5191f564a056b161c4b58706f60001cfd7fc28523ec136b208244e2948ee8e6e5d64167376bc', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-15 18:38:21', '2023-11-15 18:38:21', '2024-05-16 01:38:21'),
('3464817fbac2f22ee16664d2a3da0e5cc132398d6cc5e420791a1b7bb02935c1d82f688246073873', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-15 19:10:54', '2023-11-15 19:10:54', '2024-05-16 02:10:54'),
('5f4a3ccdee524717b9e48723d0a463a7b85086b1c758b5f0beace9ed2eef26e3788a99db822df04c', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-15 23:16:36', '2023-11-15 23:16:36', '2024-05-16 06:16:36'),
('f4a635dd6734ebbb2e12f656ed4c08c1df1aa9828a867e629ca3df9c8ee2b292ecce9e682a4d9d00', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-16 23:09:35', '2023-11-16 23:09:35', '2024-05-17 06:09:35'),
('2a7d630e23d418a8a026f3808c4f177debb9706f027d4b8697dfb4a173ac8cd704f8c29a704e6318', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-16 23:11:49', '2023-11-16 23:11:49', '2024-05-17 06:11:49'),
('6a98f8692f18303af3c2dc6bc5963aa6a8508b0f4b77425bd394593b91086e9cb2929a068843756b', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-17 00:42:46', '2023-11-17 00:42:46', '2024-05-17 07:42:46'),
('0a8be5e59b21ef9e078656b927a4dbf784bcde0620562d26a9dce3ad21c7f330fd76aec688f4520c', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-17 01:28:37', '2023-11-17 01:28:37', '2024-05-17 08:28:37'),
('ee48abb63bd6b8465c5b845adf2dd4ff78ca9c4d4c2b8dcca3a60ef5d24fd81210b464df9ce7791d', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-17 06:09:11', '2023-11-17 06:09:11', '2024-05-17 13:09:11'),
('14f21cbdb8f8590bd26d5fea0d1b0f10aa30a4a0b11341f587b2fc8a2ca56050428751bfb642fa2e', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-17 18:08:43', '2023-11-17 18:08:43', '2024-05-18 01:08:43'),
('7e36728f2ee4026a347a0e7b7ac64ff74beeade002666e965baa0a7c443365f79ce23235d17129ef', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-17 18:16:52', '2023-11-17 18:16:52', '2024-05-18 01:16:52'),
('d556e015bfd65c8ae0465e7d4acc4f2cbb02aff5f08a7b5c2f9178e40e13840958ad034421f73a9a', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-22 18:50:14', '2023-11-22 18:50:14', '2024-05-23 01:50:14'),
('7d854011cd9b5f2902e5990af3db71d6c33a84543a996874c7f657fe399a309f925fe57a27dc8827', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-22 20:04:59', '2023-11-22 20:04:59', '2024-05-23 03:04:59'),
('9698296cfb70c5fc995652342374b61fbc0cf719112a3acf7a2cac0271303e4362c73b29a99477a5', 19, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'user1@user.com', '[]', 0, '2023-11-22 20:14:58', '2023-11-22 20:14:58', '2024-05-23 03:14:58'),
('212defdfa180d3aa6adaeea4502bba7d12d87ccf17747ce8dad0fff12dc77d708a2be67adacc473b', 20, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'fghfghf@user.com', '[]', 0, '2023-11-22 20:16:33', '2023-11-22 20:16:33', '2024-05-23 03:16:33'),
('c373c7783d53504ec395c891cb768f816512c7c67c45c825d169871e690b112cfaa070cb0303c0d1', 21, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'fghfghf@user.com', '[]', 0, '2023-11-22 20:16:51', '2023-11-22 20:16:51', '2024-05-23 03:16:51'),
('09ec4c3ace0272999fed36efda4069497f7a7d165cb6a0c0f466e535f47f234deb8c9208b0490ba3', 4, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'huyxuan223@gmail.com', '[]', 0, '2023-11-22 20:29:59', '2023-11-22 20:29:59', '2024-05-23 03:29:59'),
('ea927cd3d6f919cc0b507b29ba950361d3c1e7d0bb82738e34c4397dd9af49cadcd4300aa01e560e', 4, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'huyxuan223@gmail.com', '[]', 0, '2023-11-22 20:30:28', '2023-11-22 20:30:28', '2024-05-23 03:30:28'),
('a30a2767e0fdd5de2e39925cd5d23cfc9e373d6a4a20c873b52ee1878159e2da33403819cee5628a', 22, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'fghfghf@user.com', '[]', 0, '2023-11-22 20:33:49', '2023-11-22 20:33:49', '2024-05-23 03:33:49'),
('b1a7a9c900a53543032f47afeef94260c62b58c688915de6b1bc9dd3f5d1ea80531251760d57cf26', 23, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'fghfghjkjf@user.com', '[]', 0, '2023-11-22 20:34:24', '2023-11-22 20:34:24', '2024-05-23 03:34:24'),
('f7d9c75611ab6bc6f8ce8e1e73e95fbeee3f51d4822569a4146504588f9e721704faf81d90cb1414', 4, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'huyxuan223@gmail.com', '[]', 0, '2023-11-22 20:47:31', '2023-11-22 20:47:31', '2024-05-23 03:47:31'),
('cba93b74de808e718a63bb0d27e6c45bab4b730b75d179c99651af28e865a2b0c1033b358e1cf91f', 5, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-22 20:53:17', '2023-11-22 20:53:17', '2024-05-23 03:53:17'),
('00a54aa445937d62f848eff0fb56e2ae3b98e9e44cdc52178e3c7378b0bc18df0eda159ebf9b044b', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-22 22:16:53', '2023-11-22 22:16:53', '2024-05-23 05:16:53'),
('e57b82829b19ffd09635b6cdc427c73b7e34bedae598f83d44a6b7cb77e151066aa9e1bbd93dd602', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-24 05:48:38', '2023-11-24 05:48:38', '2024-05-24 12:48:38'),
('af54f9394a28a982fb7c3b4bdd56e208bd599c39b7cb7c1ba6bfb7fbfb2e70094f0584396907eabd', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-26 20:53:01', '2023-11-26 20:53:01', '2024-05-27 03:53:01'),
('e9ef1045400792eb65c607fa46a560be228669f745ac6790cd904fdc025cc6cf81f5660c246bb655', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-26 21:04:34', '2023-11-26 21:04:34', '2024-05-27 04:04:34'),
('5dfee0c0e028864aacdad17a00e257f3e9d1c8382f5bf53de5d4cbe039af2548b00f5e397bdec2b8', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-26 21:33:22', '2023-11-26 21:33:22', '2024-05-27 04:33:22'),
('78efb5e3d8033019fd03545f1776eca88d7de7616251ad9ab67c611622774f8611315b27353cecdf', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-27 00:55:17', '2023-11-27 00:55:17', '2024-05-27 07:55:17'),
('948d103febac99e361fcf6dc600c90e32fddab5e3c1823981df7772f5dea66a097c8b66b7e9c84db', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-27 00:56:18', '2023-11-27 00:56:18', '2024-05-27 07:56:18'),
('eceab0a8f774595c590b8343f91641e9af879d16da2b2efa152219a3a29316d92bf8ae3a849f6ea3', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-27 00:57:32', '2023-11-27 00:57:32', '2024-05-27 07:57:32'),
('0aecd1d12ed1f1697e9fe5b7b468748aa6933bc9b7a413dd77750e1b7f7bf058ddc667c3d1e9c928', 24, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-27 00:58:14', '2023-11-27 00:58:14', '2024-05-27 07:58:14'),
('f3253c64c15e7412b13d9faa8acb02b4183b70e27820f80e1a732fcd034640c58f13449af3d557b5', 24, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-27 00:58:20', '2023-11-27 00:58:20', '2024-05-27 07:58:20'),
('c40b87053988b1dc65a31d388d75e60caca0256737e7a7021ae9eb8a8c337b7c139078f2f8b97ae9', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:00:34', '2023-11-27 01:00:34', '2024-05-27 08:00:34'),
('759c6dfb5ef45f7e5a2d4c5e8f183c7062827ec66f7e29c0eb7d3d9283060239666b737ac4d47a61', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:00:41', '2023-11-27 01:00:41', '2024-05-27 08:00:41'),
('4c66f933dcdd0b65174a5229878f6d008ad83fd21a40533adb3f157007a060896495bd81348d6118', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:03:43', '2023-11-27 01:03:43', '2024-05-27 08:03:43'),
('d14108469da19cee7c75d9f38e6c0be04abaffb6c3e66784ecc347007acb999bfd3c6bb1f0339f7e', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:10:29', '2023-11-27 01:10:29', '2024-05-27 08:10:29'),
('61c90a941c7cc87eafcdaad165726df8e81a3d1fee1d45d63f53be70fbf3a30df0d3c37df3494e1d', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:12:23', '2023-11-27 01:12:23', '2024-05-27 08:12:23'),
('c61f2a257097e0aa68804a5ede7fff053a47c014f76c47a9ca2148352d4af9cced0b8814b1c7d662', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:13:02', '2023-11-27 01:13:02', '2024-05-27 08:13:02'),
('86c386f42a0e49d27b82df566a639700cfcd4919a4d8c6a3dbb5df1bd7b1d031a18debcbf08c4c19', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:13:24', '2023-11-27 01:13:24', '2024-05-27 08:13:24'),
('277da3abf088a090880a1ae570c3d597cd847b6e256da89df251a463d29d091f49b3656578b1ad5a', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:14:20', '2023-11-27 01:14:20', '2024-05-27 08:14:20'),
('2c8b5b083cfbb561b5f02c63475e1fc859cc597d724defafad8f3b7f70dace12ef2c9680f57a423b', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:19:07', '2023-11-27 01:19:07', '2024-05-27 08:19:07'),
('2662448530b1de186d8b96487aec325b83fbfec6434f6efd340856024b6268455e38bd5f580130a7', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:19:35', '2023-11-27 01:19:35', '2024-05-27 08:19:35'),
('6d8a9c67239ddd0a760c5e209f0d2a40949e7ce456c6c59ac159f381c43c8cd2f85edc53c6ccedef', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:21:19', '2023-11-27 01:21:19', '2024-05-27 08:21:19'),
('994becab508fc8c2fbbfcc7ca9b62d6d114344903048930b0f0e1b482e95b602db1e41c37af9e7f4', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:21:54', '2023-11-27 01:21:54', '2024-05-27 08:21:54'),
('3eda1fb77db71ea0ca36115b199f65c596708e46f99c710df5e65e7e4d93cf47a81d8701a6d57a24', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:25:35', '2023-11-27 01:25:35', '2024-05-27 08:25:35'),
('3f47cbf34c9174da6aba63129a43c840753d3ae6b675a7c2b10cd66fc0a35a7b2910024c43b4750a', 25, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala123@gmail.com', '[]', 0, '2023-11-27 01:31:17', '2023-11-27 01:31:17', '2024-05-27 08:31:17'),
('4514d18d197791c106b333aa5556de40da22e1b1d05b1cf74c5708c23496ab60b0751af6ee9e45bc', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-27 02:24:17', '2023-11-27 02:24:17', '2024-05-27 09:24:17'),
('5930f22ae18fc38dc7a6dd2f16d4e22c3f1a3230026d67c6de9a1ba44e480de7e0e303d395f9f65c', 26, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'user@user.com', '[]', 0, '2023-11-27 22:55:29', '2023-11-27 22:55:29', '2024-05-28 05:55:29'),
('db6a5b5436ce95a4dac9977f4887655ac375190253a8b5740f0a88dd5a3ba7344e832d2fa374e7c8', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-27 23:15:14', '2023-11-27 23:15:14', '2024-05-28 06:15:14'),
('7e2916223fed1e8b09a3278f27795082c910c70601c8e3516e358161a00c829a70d724b938695c87', 24, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-28 20:40:36', '2023-11-28 20:40:36', '2024-05-29 03:40:36'),
('c986591a9a291c99569617bc4ea087e12671696160d256185324a7a13d5a35db512c9daa439fc53d', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-28 20:50:38', '2023-11-28 20:50:38', '2024-05-29 03:50:38'),
('010dc432305c6064924a53847fd4d401d059ba2e7b7d4fe074b24eaf6d3dc22f77abbf86e7fd9b49', 24, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'nguyenloichala999@gmail.com', '[]', 0, '2023-11-28 21:38:35', '2023-11-28 21:38:35', '2024-05-29 04:38:35'),
('387859593e6153deae849c5e9aedb8694bc82ac93e9912951ad59c9defd5e263c39101b6c94dc3b9', 1, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', 'admin@admin.com', '[]', 0, '2023-11-28 23:49:07', '2023-11-28 23:49:07', '2024-05-29 06:49:07');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` char(36) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(191) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
('9a857a32-d24c-488e-b065-23c21d1c233b', NULL, 'Laravel Personal Access Client', 'JLsklMnqUKHZ90KBUHOHqic1zodJGBvTNOwYY5fY', NULL, 'http://localhost', 1, 0, 0, '2023-11-02 20:05:14', '2023-11-02 20:05:14'),
('9a857a32-d825-4ccc-aa9c-78eea0d94ec2', NULL, 'Laravel Password Grant Client', 'NLzVJSvXyiRKZiIoMa7xg1eioQkAdIvkhzzKqlPg', 'users', 'http://localhost', 0, 1, 0, '2023-11-02 20:05:14', '2023-11-02 20:05:14'),
('9a8f67fc-e54c-4219-bad6-744b33beb1e4', NULL, 'Laravel Personal Access Client', 'WablwK6mx0kvWcyH2eo247esT8ru2eozbGIuROnx', NULL, 'http://localhost', 1, 0, 0, '2023-11-07 18:32:36', '2023-11-07 18:32:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, '9a857a32-d24c-488e-b065-23c21d1c233b', '2023-11-02 20:05:14', '2023-11-02 20:05:14'),
(2, '9a8f67fc-e54c-4219-bad6-744b33beb1e4', '2023-11-07 18:32:36', '2023-11-07 18:32:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `payment_id` bigint(20) UNSIGNED DEFAULT NULL,
  `voucher_id` bigint(20) UNSIGNED DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `address` varchar(191) NOT NULL,
  `total_bill` double NOT NULL,
  `status` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `name`, `email`, `payment_id`, `voucher_id`, `phone`, `address`, `total_bill`, `status`, `created_at`, `updated_at`) VALUES
(28, 1, 'hahaha', 'huy@gmail.com', NULL, NULL, '0123456789', 'asdkajsdkaj', 5609, 2, '2023-11-27 22:30:39', '2023-11-27 23:24:59'),
(27, 1, 'hahaha', 'huy@gmail.com', NULL, NULL, '0123456789', 'asdkajsdkaj', 0, 3, '2023-11-27 22:28:12', '2023-11-27 23:32:48'),
(26, 1, 'hahaha', 'huy@gmail.com', NULL, NULL, '0123456789', 'asdkajsdkaj', 0, 0, '2023-11-27 22:25:29', '2023-11-27 22:58:31'),
(29, 1, 'Super Admin', 'admin@admin.com', NULL, NULL, '0123456789', 'abc', 1177, 2, '2023-11-27 23:17:09', '2023-11-28 02:41:32'),
(30, 1, 'Super Admin', 'admin@admin.com', NULL, NULL, '0123456789', 'aaa', 289, 1, '2023-11-28 02:43:21', '2023-11-28 02:43:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_money` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `total_money`, `created_at`, `updated_at`) VALUES
(8, 27, 2, 1, 69, '2023-11-27 22:28:13', '2023-11-27 22:28:13'),
(7, 27, 4, 5, 5540, '2023-11-27 22:28:13', '2023-11-27 22:28:13'),
(6, 26, 2, 1, 69, '2023-11-27 22:25:29', '2023-11-27 22:25:29'),
(5, 26, 4, 5, 5540, '2023-11-27 22:25:29', '2023-11-27 22:25:29'),
(9, 28, 4, 5, 5540, '2023-11-27 22:30:39', '2023-11-27 22:30:39'),
(10, 28, 2, 1, 69, '2023-11-27 22:30:39', '2023-11-27 22:30:39'),
(11, 29, 4, 1, 1108, '2023-11-27 23:17:09', '2023-11-27 23:17:09'),
(12, 29, 2, 1, 69, '2023-11-27 23:17:09', '2023-11-27 23:17:09'),
(13, 30, 12, 1, 289, '2023-11-28 02:43:22', '2023-11-28 02:43:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('21211tt4210@mail.tdc.edu.vn', '94aSLrITTOfQ32eteTx6VvFNYxr54derkm1rhjRn9OvVmMWpLvljRhNTBSAf', '2023-11-08 20:23:44'),
('nguyenloichala999@gmail.com', 'VQ67m0242vb0wOZJTUs5s5yH8KS3mvu7v10rJzZCYYXJ5mx8RkgQvlTi6VmH', '2023-11-08 20:26:39'),
('21211tt4210@mail.tdc.edu.vn', '7LHbmOS9nKsJL2wqua5ldSJI8S2rATmRCgnqpbCG9TW7djMHbuG9d5jy113i', '2023-11-08 20:27:17'),
('21211tt4210@mail.tdc.edu.vn', '0GRcFQy5LHGfdiYFURXP7nlUupx5VNRbNdVfOB36t52RuXOGytDKW3ACbFiy', '2023-11-08 20:28:58'),
('21211tt4210@mail.tdc.edu.vn', 'pWsnyHWpl3YxCz5jrtHmmFIAgOofIUoB9Kp7OrxJcc3Fzj0nzQVW5Zg2VKF1', '2023-11-08 20:29:52'),
('21211tt4210@mail.tdc.edu.vn', 'MqWcH4z9XLUP9Ro6O0IWtjZDxiONUXoJEXusGtbXIxOQiDkdh5AXYMFfEZ47', '2023-11-08 20:31:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expire_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `slug` varchar(191) DEFAULT NULL,
  `description` longtext NOT NULL,
  `money` double NOT NULL,
  `photo` varchar(191) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `money`, `photo`, `category_id`, `created_at`, `updated_at`) VALUES
(2, 'G-Wolves HTS (Small) Wired Gaming Mouse', NULL, '[Trọng lượng siêu nhẹ] 49g: Chuột chơi game thiết kế tổ ong có trọng lượng siêu nhẹ với 6 nút, nhẹ hơn 12g so với Hati-M, khiến chuột Hati nhẹ nhất', 69, '1699267742.377200577_1451335309048676_6345170624338227541_n.png', 3, '2023-11-06 01:58:37', '2023-11-06 03:49:02'),
(3, 'HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads', NULL, 'Đáp ứng tần số 15-25kKhz. Loại tai nghe vừa vặn: Over-Ear. Lưu ý: Nếu kích thước của đầu tai nghe không khớp với kích thước ống tai của bạn hoặc tai nghe không được đeo đúng cách vào tai bạn, bạn có thể không thu được âm thanh chính xác chất lượng hoặc hiệu suất cuộc gọi. Thay đổi nút tai nghe thành nút vừa khít hơn với tai bạn', 299, '1699268661.tainghe123.png', 4, '2023-11-06 02:01:21', '2023-11-06 04:04:21'),
(4, 'Samsung Galaxy S23 Ultra 12GB 512GB', NULL, 'Thoả sức chụp ảnh, quay video chuyên nghiệp - Camera đến 200MP, chế độ chụp đêm cải tiến, bộ xử lí ảnh thông minh', 1108, '1699267844.image-removebg-preview-2_638109032737377121.jpg', 2, '2023-11-06 02:05:09', '2023-11-06 03:50:44'),
(5, 'ROCCAT Vulcan Pro Linear Optical PC Gaming Keyboard', NULL, 'Tốc độ quang học, cảm giác cơ học tuyến tính - Bộ chuyển mạch Titan tuyến tính mới của ROCCAT hoạt động ở tốc độ ánh sáng để đạt được tốc độ và độ phản hồi ở cấp độ hoàn toàn mới, trong khi vẫn giữ được cảm giác gõ phím đặc trưng của cơ học.', 109, '1699268151.keyboardtaydem.png', 5, '2023-11-06 02:07:05', '2023-11-06 03:55:51'),
(6, 'CORSAIR K70 CORE RGB Mechanical Gaming Keyboard', NULL, 'Trải nghiệm bàn phím cơ tuyệt vời: Công tắc cơ tuyến tính CORSAIR màu đỏ được bôi trơn trước mang lại những lần gõ phím mượt mà, nhạy, được tăng cường nhờ hai lớp giảm âm để mang lại cảm giác chơi game và đánh máy cực kỳ thỏa mãn', 109, '1699268297.keyboardrazor.png', 5, '2023-11-06 02:15:53', '2023-11-06 03:58:17'),
(7, 'Razer DeathStalker V2 Pro TKL Wireless Gaming Keyboard', NULL, 'CÔNG CỤ QUANG HỌC TUYẾN TÍNH CẤU HÌNH THẤP — Thực hiện thao tác gõ phím nhanh hơn với các công tắc hoàn toàn mới có chiều cao tác động ngắn hơn để giảm hành trình phím, được hỗ trợ bởi tuổi thọ 70 triệu lần nhấn phím để có hiệu suất lâu dài\nKẾT NỐI HÀNG ĐẦU — Trải nghiệm chơi game không bị lag và phản hồi tức thì với kết nối Razer HyperSpeed ​​Wireless (2.4GHz) hoặc mở khóa chức năng lớn hơn với Bluetooth 5.0 và chuyển đổi giữa 3 thiết bị', 188, '1699268377.keyboard0day.png', 5, '2023-11-06 02:19:40', '2023-11-06 03:59:37'),
(8, 'Razer Cobra Pro Wireless Gaming Mouse', NULL, 'CẢM BIẾN QUANG FOCUS PRO 30K — Cung cấp hiệu suất theo dõi hoàn hảo trên nhiều bề mặt khác nhau, bao gồm cả kính—được hỗ trợ bởi các chức năng thông minh, giúp tăng cường khả năng ngắm và kiểm soát', 97, '1699268422.razorcomau.png', 3, '2023-11-06 02:21:36', '2023-11-06 04:00:22'),
(9, 'Razer Viper Ultimate Lightweight Wireless Gaming Mouse', NULL, 'Chuột chơi game Esports không dây nhẹ nhất, không thỏa hiệp với trọng lượng 74g: Razer Viper Ultimate bao gồm cảm biến quang 20K dpi phù hợp với những game thủ nghiêm túc nhất mà không cần khoan lỗ', 69, '1699268460.chuotrazor0day.png', 3, '2023-11-06 02:23:29', '2023-11-06 04:01:00'),
(10, 'Razer BlackShark V2 X Gaming Headset', NULL, 'Khử tiếng ồn thụ động nâng cao: đệm tai kín chắc chắn che kín tai để ngăn tiếng ồn lọt vào tai nghe, với đệm của nó mang lại khả năng bịt kín gần hơn để cách ly âm thanh tốt hơn.', 49, '1699268485.taingherazor.png', 4, '2023-11-06 02:25:20', '2023-11-06 04:01:25'),
(11, 'Turtle Beach Stealth Pro Multiplatform Wireless Noise-Cancelling Gaming Headset', NULL, 'Âm thanh vượt trội từ Trình điều khiển Nanoclear 50mm được chọn lọc thủ công.\nKhả năng khử tiếng ồn chủ động có thể điều chỉnh và độ trong suốt tiếng ồn', 299, '1699268506.tainghexbox.png', 4, '2023-11-06 02:26:42', '2023-11-06 04:01:46'),
(12, 'BenQ ZOWIE XL2540K 24.5-inch 240Hz Gaming Monitor', NULL, 'Hiệu suất tốc độ làm mới cao 240 Hz nhanh như chớp cho trải nghiệm chơi game mượt mà trên PC. 120Hz Tương thích với PS5 và Xbox Series X.\nChân đế được thiết kế lại chiếm ít không gian hơn, cho phép game thủ có nhiều không gian hơn trong việc thiết lập các chuyển động trong trò chơi.', 289, '1699268546.xl2540k.png', 1, '2023-11-06 02:29:42', '2023-11-06 04:02:26'),
(13, 'ASUS TUF 34 Inch Curved Gaming Monitor - WQHD (3440x1440)', NULL, 'Màn hình chơi game cong 34 inch WQHD (3440x1440) 1500R với tốc độ làm mới cực nhanh 165Hz (hỗ trợ 144Hz) được thiết kế dành cho các game thủ chuyên nghiệp và lối chơi đắm chìm\nCông nghệ ASUS Extreme Low Motion Blur (ELMB) cho phép thời gian phản hồi 1ms (MPRT) để loại bỏ hiện tượng bóng ma, mang lại hình ảnh chơi game sắc nét ở tốc độ khung hình cao', 462, '1699268571.tuf.png', 1, '2023-11-06 02:30:51', '2023-11-06 04:02:51'),
(14, 'OnePlus 11 5G | 16GB RAM+256GB | Dual-SIM | Titan Black', NULL, 'Hiệu suất đỉnh cao: Chipset Qualcomm Snapdragon 8 Gen 2 mới là chipset tiên tiến nhất dành cho các thiết bị Android, với hiệu suất CPU và GPU tăng lên. Các quy trình AI tích hợp cải thiện việc sử dụng ứng dụng nền, mang lại khả năng đa nhiệm cao hơn.\nHình ảnh không gánh nặng: OnePlus 11 5G có hệ thống ba camera, được đồng phát triển với Hasselblad - cảm biến chính 50MP, cảm biến siêu rộng 48MP và cảm biến Tele 32MP. Tích hợp Hasselblad mở ra nhiều khả năng chụp ảnh, bao gồm Giải pháp màu OnePlus Billion, Hiệu chỉnh màu tự nhiên của Hasselblad và Chân dung Hasselblad.', 799, '1699268595.oneplus.png', 2, '2023-11-06 02:32:07', '2023-11-06 04:03:15'),
(15, 'iPhone 15 512GB - Green', NULL, 'Thiết kế thời thượng và bền bỉ - Mặt lưng kính được pha màu xu hướng cùng khung viền nhôm bền bỉ.\n Dynamic Island hiển thị linh động mọi thông báo ngay lập tức giúp bạn nắm bắt mọi thông tin', 1299, 'iphone15promax.png', 2, '2023-11-06 02:35:54', '2023-11-06 02:35:54'),
(58, 'tai nghe gaming', NULL, 'ZOWIE BenQ XL2566K là màn hình hàng đầu cung cấp cho các game thủ sự mượt mà và phản hồi nhanh, cũng như nhiều tính năng có thể tùy chỉnh; giúp những người chơi nghiệp dư và chuyên nghiệp có thể phát huy hết khả năng của mình. Với công nghệ DyAc⁺ ™ độc quyền cùng tốc độ làm mới 360Hz trên bảng điều khiển TN, XL2566K mang đến chuyển động tổng thể rõ nét hơn so với các sản phẩm cùng loại trên thị trường.', 1395, '71MJ3OaVqBL._AC_SX466_.png', 1, '2023-11-15 19:23:37', '2023-11-22 20:05:57');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `replies`
--

CREATE TABLE `replies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `stars` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `product_id`, `stars`, `created_at`, `updated_at`) VALUES
(1, 1, 6, 5, '2023-11-28 21:09:06', '2023-11-28 21:09:06'),
(2, 1, 2, 5, '2023-11-28 21:38:10', '2023-11-28 21:38:10'),
(3, 24, 2, 4, '2023-11-28 21:38:46', '2023-11-28 21:38:46'),
(4, 24, 5, 3, '2023-11-28 23:39:46', '2023-11-28 23:39:46'),
(5, 1, 3, 1, '2023-11-29 07:05:11', '2023-11-29 07:05:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', NULL, NULL),
(2, 'User', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `showrooms`
--

CREATE TABLE `showrooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `address` text NOT NULL,
  `time` varchar(191) NOT NULL,
  `photo` varchar(191) NOT NULL,
  `map` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `showrooms`
--

INSERT INTO `showrooms` (`id`, `name`, `address`, `time`, `photo`, `map`, `created_at`, `updated_at`) VALUES
(3, 'Chi nhánh Thủ Đức', '53 Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam', 'Từ 8 giờ đến 22 giờ, từ thứ 2 đến chủ nhật', 'showroomtdc.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006548.7273701866!2d105.12429002322277!3d9.78036629962236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752797e321f8e9%3A0xb3ff69197b10ec4f!2zVHLGsOG7nW5nIGNhbyDEkeG6s25nIEPDtG5nIG5naOG7hyBUaOG7pyDEkOG7qWM!5e0!3m2!1svi!2s!4v1701055571558!5m2!1svi!2s', '2023-11-26 20:26:47', '2023-11-26 20:28:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `type` bigint(20) UNSIGNED NOT NULL DEFAULT 2,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `email_verified_at`, `password`, `status`, `type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', '0123456788', 'admin@admin.com', NULL, '$2y$10$yPiFyNXcs99wbKYPKb9UqesIUpG.WdhnDgmL3QUjY7WER4dAuesAi', 'Active', 1, NULL, NULL, '2023-11-28 20:52:19'),
(24, 'loi', '0123456789', 'nguyenloichala999@gmail.com', NULL, '$2y$10$uT0zzl5X.HwynkMBMPkw.eoj4GbeGHeYdhO5PheoZh6os4MrHaSgu', 'Active', 2, NULL, '2023-11-27 00:58:14', '2023-11-27 00:58:14'),
(25, 'test', '0123456789', 'nguyenloichala123@gmail.com', NULL, '$2y$10$XIseTxdVKqYLKboQFHK5YuCadutGT9NagjKN3anGgXYyswPIaylfa', 'Active', 2, NULL, '2023-11-27 01:00:34', '2023-11-27 01:00:34'),
(26, 'user', '1234567890', 'user@user.com', NULL, '$2y$10$fijFUNzzEMu9AZ48DG/eEea4mGh6dq.P6l79vpLlyNMPW5Gloz0/e', 'Active', 2, NULL, '2023-11-27 22:55:29', '2023-11-27 22:55:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchers`
--

CREATE TABLE `vouchers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `wishlists`
--

CREATE TABLE `wishlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addresses_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`),
  ADD KEY `carts_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contacts_user_id_foreign` (`name`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_payment_id_foreign` (`payment_id`),
  ADD KEY `orders_voucher_id_foreign` (`voucher_id`);

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Chỉ mục cho bảng `replies`
--
ALTER TABLE `replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `replies_user_id_foreign` (`user_id`),
  ADD KEY `replies_product_id_foreign` (`product_id`),
  ADD KEY `replies_comment_id_foreign` (`comment_id`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`),
  ADD KEY `reviews_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `showrooms`
--
ALTER TABLE `showrooms`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_type_foreign` (`type`);

--
-- Chỉ mục cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wishlists_user_id_foreign` (`user_id`),
  ADD KEY `wishlists_product_id_foreign` (`product_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT cho bảng `replies`
--
ALTER TABLE `replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `showrooms`
--
ALTER TABLE `showrooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
