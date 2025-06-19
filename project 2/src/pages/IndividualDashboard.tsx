import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import { 
  MapPin, 
  Leaf, 
  Users,
  Target,
  Plus,
  Eye,
  Calendar,
  Award,
  TrendingUp,
  Heart,
  Settings,
  Bell,
  X
} from 'lucide-react';

const IndividualDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showAddLandModal, setShowAddLandModal] = useState(false);

  const myLands = [
    {
      id: 1,
      name: "أرض المزرعة الشمالية",
      location: "الرياض - الدرعية",
      area: "2.5 هكتار",
      status: "مزروعة",
      progress: 78,
      lastUpdate: "منذ 3 أيام",
      plantType: "أشجار الزيتون"
    },
    {
      id: 2,
      name: "قطعة الأرض الخلفية",
      location: "الرياض - العليا",
      area: "0.8 هكتار",
      status: "قيد التطوير",
      progress: 45,
      lastUpdate: "منذ أسبوع",
      plantType: "نباتات الزينة"
    }
  ];

  const myCampaigns = [
    {
      id: 1,
      title: "حملة تشجير الرياض الكبرى",
      date: "2024-03-15",
      status: "مشارك",
      role: "متطوع",
      hours: 8
    },
    {
      id: 2,
      title: "إعادة تأهيل وادي حنيفة",
      date: "2024-03-20",
      status: "مسجل",
      role: "متطوع",
      hours: 0
    }
  ];

  const AddLandModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">إضافة أرض جديدة</h2>
            <button 
              onClick={() => setShowAddLandModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">اسم الأرض</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="أدخل اسم الأرض"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الموقع</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="المدينة - المنطقة"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">المساحة (هكتار)</label>
              <input 
                type="number" 
                step="0.1"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="2.5"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">نوع النبات المزروع</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>أشجار الزيتون</option>
              <option>أشجار النخيل</option>
              <option>نباتات الزينة</option>
              <option>أشجار الفاكهة</option>
              <option>نباتات عطرية</option>
              <option>أخرى</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">حالة الأرض</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>مزروعة</option>
              <option>قيد التطوير</option>
              <option>في التخطيط</option>
              <option>تحتاج تأهيل</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ملاحظات إضافية</label>
            <textarea 
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="أي معلومات إضافية عن الأرض..."
            />
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button 
            onClick={() => setShowAddLandModal(false)}
            className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            إضافة الأرض
          </button>
          <button 
            onClick={() => setShowAddLandModal(false)}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">مرحباً أحمد!</h1>
              <p className="text-primary-100 text-lg">
                شكراً لمساهمتك في جعل المملكة أكثر خضرة واستدامة
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={MapPin}
            value="3"
            label="أراضي مسجلة"
            trend="أرض جديدة هذا الشهر"
            color="bg-primary-600"
          />
          <StatCard
            icon={Users}
            value="5"
            label="حملات مشارك بها"
            trend="+2 هذا الشهر"
            color="bg-secondary-600"
          />
          <StatCard
            icon={Leaf}
            value="127"
            label="شجرة زرعتها"
            trend="+23 هذا الأسبوع"
            color="bg-green-600"
          />
          <StatCard
            icon={Award}
            value="89"
            label="نقاط التطوع"
            trend="المستوى: متطوع نشط"
            color="bg-earth-600"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                selectedTab === 'overview'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              نظرة عامة
            </button>
            <button
              onClick={() => setSelectedTab('lands')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                selectedTab === 'lands'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              أراضيي
            </button>
            <button
              onClick={() => setSelectedTab('campaigns')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                selectedTab === 'campaigns'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              حملاتي
            </button>
            <button
              onClick={() => setSelectedTab('analysis')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                selectedTab === 'analysis'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              تحليل الأراضي
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">النشاط الأخير</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg ml-3">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">زراعة 15 شجرة زيتون</p>
                      <p className="text-xs text-gray-600">أرض المزرعة الشمالية</p>
                      <p className="text-xs text-gray-500">منذ 3 أيام</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg ml-3">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">انضمام لحملة تشجير</p>
                      <p className="text-xs text-gray-600">حملة تشجير الرياض الكبرى</p>
                      <p className="text-xs text-gray-500">منذ أسبوع</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-lg ml-3">
                      <Eye className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">تحليل أرض جديدة</p>
                      <p className="text-xs text-gray-600">قطعة الأرض الخلفية</p>
                      <p className="text-xs text-gray-500">منذ أسبوعين</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">إجراءات سريعة</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowAddLandModal(true)}
                    className="w-full bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4 ml-2" />
                    إضافة أرض جديدة
                  </button>
                  <Link 
                    to="/campaigns"
                    className="w-full border-2 border-secondary-600 text-secondary-600 p-3 rounded-lg hover:bg-secondary-50 transition-colors flex items-center justify-center"
                  >
                    <Heart className="h-4 w-4 ml-2" />
                    تصفح الحملات
                  </Link>
                  <Link 
                    to="/analysis"
                    className="w-full border-2 border-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    <Eye className="h-4 w-4 ml-2" />
                    بدء تحليل جديد
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">إنجازاتي</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">متطوع نشط</span>
                    <Award className="h-5 w-5 text-gold-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">زارع مبتدئ</span>
                    <Leaf className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">صديق البيئة</span>
                    <Target className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'lands' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">أراضيي المسجلة</h2>
              <button 
                onClick={() => setShowAddLandModal(true)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
              >
                <Plus className="h-4 w-4 ml-2" />
                إضافة أرض جديدة
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {myLands.map((land) => (
                <div key={land.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{land.name}</h3>
                      <p className="text-gray-600 text-sm">{land.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      land.status === 'مزروعة' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {land.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">المساحة:</span>
                      <span className="font-medium">{land.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">نوع النبات:</span>
                      <span className="font-medium">{land.plantType}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">آخر تحديث:</span>
                      <span className="font-medium">{land.lastUpdate}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>التقدم</span>
                      <span>{land.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
                        style={{width: `${land.progress}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm">
                      عرض التفاصيل
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      تحديث البيانات
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'campaigns' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">حملاتي التطوعية</h2>
              <Link 
                to="/campaigns"
                className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors flex items-center"
              >
                <Heart className="h-4 w-4 ml-2" />
                تصفح الحملات
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {myCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                      <p className="text-gray-600 text-sm">{campaign.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'مشارك' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">الدور:</span>
                      <span className="font-medium">{campaign.role}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ساعات التطوع:</span>
                      <span className="font-medium">{campaign.hours} ساعة</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-secondary-600 text-white py-2 rounded-lg hover:bg-secondary-700 transition-colors text-sm">
                    عرض تفاصيل الحملة
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'analysis' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <Eye className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">تحليل الأراضي</h2>
            <p className="text-gray-600 mb-6">
              استخدم أدوات التحليل المتقدمة لتقييم أراضيك والحصول على توصيات مخصصة
            </p>
            <Link 
              to="/analysis"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold inline-block"
            >
              بدء تحليل جديد
            </Link>
          </div>
        )}
      </div>

      {/* Add Land Modal */}
      {showAddLandModal && <AddLandModal />}
    </div>
  );
};

export default IndividualDashboard;