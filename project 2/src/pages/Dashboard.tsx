import React, { useState } from 'react';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import { 
  TrendingUp, 
  AlertTriangle, 
  MapPin, 
  Users,
  Leaf,
  Shield,
  Eye,
  Target,
  Calendar,
  Filter,
  Download,
  Bell,
  Settings
} from 'lucide-react';

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [alertsVisible, setAlertsVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
            <p className="text-gray-600 mt-2">مراقبة شاملة لحالة الأراضي والحملات</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4 ml-2" />
              تصفية
            </button>
            <button className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              <Download className="h-4 w-4 ml-2" />
              تصدير التقرير
            </button>
          </div>
        </div>

        {/* Critical Alerts */}
        {alertsVisible && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 animate-fade-in">
            <div className="flex justify-between items-start">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-red-600 ml-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">تنبيهات حرجة جديدة</h3>
                  <p className="text-red-700 mb-4">تم اكتشاف تدهور نباتي في 3 مناطق جديدة تتطلب تدخل فوري</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-red-800">
                      <MapPin className="h-4 w-4 ml-2" />
                      منطقة الرياض - القطاع الشمالي (خطر عالي)
                      <button className="bg-red-600 text-white px-3 py-1 rounded mr-4 text-xs hover:bg-red-700 transition-colors">
                        ابدأ دراسة تشجير
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-red-800">
                      <MapPin className="h-4 w-4 ml-2" />
                      منطقة مكة - الطائف (خطر متوسط)
                      <button className="bg-red-600 text-white px-3 py-1 rounded mr-4 text-xs hover:bg-red-700 transition-colors">
                        ابدأ دراسة تشجير
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setAlertsVisible(false)}
                className="text-red-400 hover:text-red-600"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={MapPin}
            value="12,547"
            label="هكتار تم تحليلها"
            trend="+15% هذا الشهر"
            color="bg-primary-600"
          />
          <StatCard
            icon={AlertTriangle}
            value="23"
            label="تنبيه نشط"
            trend="5 حرج"
            color="bg-red-600"
          />
          <StatCard
            icon={Leaf}
            value="89"
            label="حملة تشجير نشطة"
            trend="+8 هذا الأسبوع"
            color="bg-primary-600"
          />
          <StatCard
            icon={Users}
            value="1,247"
            label="متطوع مشارك"
            trend="+23% نمو"
            color="bg-secondary-600"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Heat Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">خريطة المخاطر الحرارية</h2>
                <div className="flex gap-2">
                  <select 
                    value={selectedRegion} 
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="all">جميع المناطق</option>
                    <option value="riyadh">الرياض</option>
                    <option value="makkah">مكة المكرمة</option>
                    <option value="eastern">الشرقية</option>
                  </select>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-green-50 to-primary-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-gray-600">خريطة تفاعلية - عرض بيانات الأقمار الصناعية</p>
                  <div className="flex justify-center mt-4 space-x-4 space-x-reverse">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded ml-2"></div>
                      <span className="text-sm text-gray-600">خطر عالي</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded ml-2"></div>
                      <span className="text-sm text-gray-600">خطر متوسط</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded ml-2"></div>
                      <span className="text-sm text-gray-600">مستقر</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">الأنشطة الأخيرة</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg ml-3">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">حملة تشجير جديدة</p>
                    <p className="text-xs text-gray-600">منطقة الرياض - 150 متطوع</p>
                    <p className="text-xs text-gray-500">منذ ساعتين</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg ml-3">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">تنبيه تدهور نباتي</p>
                    <p className="text-xs text-gray-600">منطقة مكة - يتطلب تدخل</p>
                    <p className="text-xs text-gray-500">منذ 4 ساعات</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg ml-3">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">تحليل أرض جديد</p>
                    <p className="text-xs text-gray-600">500 هكتار - نتائج إيجابية</p>
                    <p className="text-xs text-gray-500">أمس</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">إحصائيات سريعة</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">معدل نجاح التشجير</span>
                  <span className="text-sm font-semibold text-green-600">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">كفاءة استخدام المياه</span>
                  <span className="text-sm font-semibold text-blue-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">مشاركة المجتمع</span>
                  <span className="text-sm font-semibold text-purple-600">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">تطور الغطاء النباتي</h3>
            <div className="h-64 bg-gradient-to-r from-green-50 to-primary-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-2" />
                <p className="text-gray-600">رسم بياني تفاعلي</p>
                <p className="text-sm text-gray-500">عرض التطور الزمني للغطاء النباتي</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">توزيع الحملات حسب المنطقة</h3>
            <div className="h-64 bg-gradient-to-r from-secondary-50 to-earth-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Target className="h-12 w-12 text-secondary-600 mx-auto mb-2" />
                <p className="text-gray-600">خريطة توزيع</p>
                <p className="text-sm text-gray-500">عرض الحملات النشطة حسب المناطق</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;