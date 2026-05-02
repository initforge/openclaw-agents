import fs from 'fs';
import path from 'path';

const VIEW_DIR = 'p:/open-claw-setup/apps/web-admin/src/views';
const files = fs.readdirSync(VIEW_DIR).filter(f => f.endsWith('.js'));

let totalFixes = 0;

for (const file of files) {
  const fpath = path.join(VIEW_DIR, file);
  let c = fs.readFileSync(fpath, 'utf-8');
  const orig = c;
  let fixes = [];

  // ═══ FIX 1: REMOVE LEFTOVER STITCH SIDEBARS ═══
  // Remove full sidebar nav blocks
  const sidebarRegex = /<nav[^>]*class="[^"]*(?:hidden md:flex|flex-col h-full|docked left-0|sticky top-0)[^"]*"[^>]*>[\s\S]*?<\/nav>/gi;
  if (sidebarRegex.test(c)) {
    c = c.replace(sidebarRegex, '');
    fixes.push('removed sidebar nav');
  }

  // Remove leftover sidebar comment markers and empty wrappers
  c = c.replace(/<!-- SideNavBar[^>]*-->\s*/g, '');
  c = c.replace(/<!-- Shared Component: SideNavBar -->\s*/g, '');
  c = c.replace(/<!-- SideNavBar \(from JSON\) -->\s*/g, '');
  c = c.replace(/<!-- SideNavBar \(JSON\) -->\s*/g, '');
  c = c.replace(/<!-- TopNavBar[^>]*-->\s*/g, '');
  c = c.replace(/<!-- Shared Component: TopNavBar -->\s*/g, '');
  c = c.replace(/<!-- TopAppBar[^>]*-->\s*/g, '');
  c = c.replace(/<!-- Top AppBar[^>]*-->\s*/g, '');
  c = c.replace(/<!-- TopAppBar \(JSON\) -->\s*/g, '');
  c = c.replace(/<!-- TopAppBar \(Shared Component\) -->\s*/g, '');

  // ═══ FIX 2: NO-LINE RULE — Remove ALL border classes ═══
  // Remove border utility classes from Tailwind
  // border border-X, border-b, border-t, border-l, border-r, border-[color]
  c = c.replace(/ border border-outline-variant(?:\/\d+)?/g, '');
  c = c.replace(/ border border-\[#[A-Fa-f0-9]+\]/g, '');
  c = c.replace(/ border-b border-outline-variant(?:\/\d+)?/g, '');
  c = c.replace(/ border-b border-surface-container-highest(?:\/\d+)?/g, '');
  c = c.replace(/ border-t border-outline-variant(?:\/\d+)?/g, '');
  c = c.replace(/ border-t border-surface-container-highest/g, '');
  c = c.replace(/ border border-\[#EAE3D8\]/g, '');
  c = c.replace(/ border-l border-outline-variant(?:\/\d+)?/g, '');
  // Keep border-l-4 (accent indicators) and border-l-2 (timeline indicators)
  // Remove border-b on table rows
  c = c.replace(/ border-b border-surface-container-highest\/50/g, '');
  // Remove border on status badges (keep only outline-variant on pills)
  c = c.replace(/ border border-error\/20/g, '');

  // ═══ FIX 3: VIETNAMESE CONSISTENCY ═══
  const VI_MAP = {
    // Trading Connections
    'Connections Manager': 'Quản Lý Kết Nối',
    'Manage your signal sources and execution bridges.': 'Quản lý nguồn tín hiệu và cầu nối thực thi.',
    'Paste signal text here...': 'Dán tín hiệu vào đây...',

    // Trading Strategy
    'Trailing Stop Loss': 'Cắt Lỗ Động (Trailing SL)',
    'Risk Guards (Bảo vệ Rủi ro)': 'Bảo Vệ Rủi Ro',
    '>ON<': '>BẬT<',
    'Hold-to-Confirm': 'Giữ để Xác Nhận',

    // Trading History
    '>Reason<': '>Lý Do<',
    '>Signal ID<': '>Mã Tín Hiệu<',

    // Signal Stream
    '>Confidence<': '>Độ Tin Cậy<',
    '>Confidence (Actionable)<': '>Độ Tin Cậy<',
    '>ACTION<': '>HÀNH ĐỘNG<',
    '>ENTRY<': '>ĐIỂM VÀO<',
    'No actionable trading parameters detected.': 'Không phát hiện tham số giao dịch khả dụng.',
    'Message classified as chatter/noise.': 'Tin nhắn được phân loại là nhiễu/tán gẫu.',
    'Order #OC-9921 placed successfully via API.': 'Lệnh #OC-9921 đã khớp thành công qua API.',
    'Risk limit exceeded. SL distance (50 pips) breaches max risk rule.': 'Vượt giới hạn rủi ro. Khoảng cách SL (50 pips) vi phạm quy tắc rủi ro tối đa.',

    // Content Context
    '>Scope<': '>Phạm Vi<',
    '>Captured<': '>Thu Thập<',
    '>Retention<': '>Lưu Giữ<',
    '>Size<': '>Kích Thước<',
    '>Expired<': '>Hết Hạn<',
    '>Purged<': '>Đã Xoá<',
    '30 days': '30 ngày',
    '7 days': '7 ngày',

    // Leads Radar
    'IDENTIFIED PAIN POINTS': 'VẤN ĐỀ NHẬN DIỆN',
    'Omnichannel Overload': 'Quá Tải Đa Kênh',
    'Manual Response Inefficiency': 'Phản Hồi Thủ Công Kém',
    'Data Sync Errors': 'Lỗi Đồng Bộ Dữ Liệu',
    'Integration Needs': 'Nhu Cầu Tích Hợp',
    'Respond Now': 'Phản Hồi Ngay',
    'Review Draft': 'Xem Bản Nháp',
    'Draft Fast': 'Nháp Nhanh',
    'Assisted Comment': 'Phản Hồi Trợ Giúp',
    'leads active requiring immediate attention': 'lead cần xử lý ngay',
    '>LEAD SCORE<': '>ĐIỂM LEAD<',
    '>FILTER<': '>LỌC<',

    // Trading Desk
    '>Exposure<': '>Mức Phơi Nhiễm<',
    'MT5 CONNECTED': 'MT5 ĐÃ KẾT NỐI',
    'Đóng tất cả vị thế': 'Đóng tất cả vị thế',
  };

  for (const [en, vi] of Object.entries(VI_MAP)) {
    if (c.includes(en)) {
      c = c.split(en).join(vi);
      fixes.push(`vi: "${en.substring(0, 30)}…"`);
    }
  }

  if (c !== orig) {
    fs.writeFileSync(fpath, c);
    totalFixes++;
    console.log(`[FIXED] ${file}: ${fixes.join(', ')}`);
  } else {
    console.log(`[OK] ${file}`);
  }
}

console.log(`\n=== COMPREHENSIVE FIX: ${totalFixes}/${files.length} views updated ===`);
