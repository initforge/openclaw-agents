import fs from 'fs';
import path from 'path';

const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';
const files = fs.readdirSync(VIEW_DIR).filter(f => f.endsWith('.js'));

const DICT = {
  // Trading History
  'Trading History &amp; Reconciliation': 'Lịch Sử Thực Thi & Đối Soát',
  'Daily operational logs and database sync status.': 'Nhật ký vận hành hàng ngày và trạng thái đồng bộ cơ sở dữ liệu.',
  '>Order ID<': '>Mã Lệnh<',
  '>Type<': '>Loại<',
  '>Fill Price<': '>Giá Khớp<',
  '>Timestamp<': '>Thời Gian<',
  '>Insufficient Margin<': '>Không đủ ký quỹ<',
  '>Market Closed<': '>Thị trường đóng cửa<',
  '>Price Deviation<': '>Lệch giá<',
  '>Last Run<': '>Lần Chạy Cuối<',
  '>DB Positions<': '>Vị thế DB<',
  '>MT5 Positions<': '>Vị thế MT5<',
  '>Mismatches<': '>Sai lệch<',
  
  // Leads Respond & Radar
  '>IDENTIFIED PAIN POINTS<': '>VẤN ĐỀ NHẬN DIỆN<',
  '>Respond Now<': '>Phản Hồi Ngay<',
  '>Draft Fast<': '>Tạo Nháp Nhanh<',
  '>Assisted Comment<': '>Phản Hồi Trợ Giúp<',
  '>Review Draft<': '>Xem Bản Nháp<',
  '>active requiring immediate attention<': '>lead cần chú ý ngay<',
  '>LEAD SCORE<': '>ĐIỂM LEAD<',
  
  // Leads Proof
  '>Case Study<': '>Case Study<',
  '>Testimonial<': '>Feedback<',
  
  // Leads Sources
  '>Sources Management<': '>Quản Lý Nguồn<',
  '>Tracked Facebook Groups and Pages<': '>Các Group và Page Facebook đang theo dõi<',
  '>Group Name<': '>Tên Nguồn<',
  '>Platform<': '>Nền Tảng<',
  '>Status<': '>Trạng Thái<',
  '>Risk Level<': '>Mức Rủi Ro<',
  '>Cooldown<': '>Chờ (Cooldown)<',
  '>Active<': '>Hoạt Động<',
  '>Paused<': '>Tạm Dừng<',
  
  // Trading Connections
  '>System Connections<': '>Kết Nối Hệ Thống<',
  '>Manage integrations with MT5, Telegram, and Zalo.<': '>Quản lý tích hợp MT5, Telegram và Zalo.<',
  '>Connected<': '>Đã Kết Nối<',
  '>Disconnected<': '>Mất Kết Nối<',
  '>Waiting for scan<': '>Chờ quét QR<',
  '>Latency<': '>Độ Trễ<',
  '>Last Sync<': '>Đồng bộ cuối<',
  '>Reconnect<': '>Kết Nối Lại<',
  '>Scan QR<': '>Quét QR<',
  
  // Content Pipeline
  '>Content Pipeline<': '>Quy Trình Đăng Bài<',
  '>Manage draft, review, and publishing flow.<': '>Quản lý luồng tạo nháp, duyệt và đăng bài.<',
  '>DRAFT<': '>NHÁP<',
  '>REVIEWED<': '>ĐÃ DUYỆT<',
  '>READY<': '>SẴN SÀNG<',
  '>PUBLISHING<': '>ĐANG ĐĂNG<',
  '>PUBLISHED<': '>ĐÃ ĐĂNG<',
  '>Edit<': '>Sửa<',
  '>Publish<': '>Đăng<',
  '>View<': '>Xem<'
};

let changeCount = 0;
for (const file of files) {
  const fpath = path.join(VIEW_DIR, file);
  let content = fs.readFileSync(fpath, 'utf-8');
  let original = content;
  
  for (const [en, vi] of Object.entries(DICT)) {
    // using split join to replace all occurrences without regex escaping issues
    content = content.split(en).join(vi);
  }
  
  if (content !== original) {
    fs.writeFileSync(fpath, content);
    console.log(`[TRANSLATED] ${file}`);
    changeCount++;
  }
}
console.log(`\n=== TRANSLATED ${changeCount}/${files.length} views ===`);
