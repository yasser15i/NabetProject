import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Share2,
  MapPin,
  Calendar,
  Leaf,
  Target,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Thermometer,
  Eye,
  BarChart3
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReportPage = () => {
  const { type, id } = useParams();
  const reportRef = useRef();

  // Mock data based on report type
  const getReportData = () => {
    if (type === 'analysis') {
      return {
        title: 'تقرير تحليل الأراضي',
        subtitle: 'تحليل شامل لقابلية التشجير والتوصيات البيئية',
        location: 'الرياض - الدرعية',
        date: '2024-03-15',
        area: '2.5 هكتار',
        coordinates: '24.7136° N, 46.6753° E',
        suitabilityScore: 87,
        soilType: 'طينية رملية',
        waterAvailability: 'متوسطة',
        climate: 'صحراوي معتدل',
        recommendations: [
          'أشجار النخيل',
          'شجيرات الأراك',
          'نباتات الصبار',
          'الأشجار المقاومة للملوحة'
        ],
        priority: 'عالية',
        interventionType: 'تشجير مباشر مع تحسين التربة',
        riskLevel: 'متوسط'
      };
    } else if (type === 'dashboard') {
      return {
        title: 'تقرير لوحة التحكم',
        subtitle: 'ملخص شامل للأنشطة والإحصائيات',
        period: 'مارس 2024',
        totalAnalyzed: '12,547 هكتار',
        activeAlerts: 23,
        activeCampaigns: 89,
        volunteers: 1247,
        successRate: '87%',
        waterEfficiency: '92%',
        communityEngagement: '78%'
      };
    }
    return {};
  };

  const reportData = getReportData();

  const generatePDF = async () => {
    const element = reportRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`nabit-report-${type}-${id}.pdf`);
  };

  const printReport = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Hidden in print */}
      <div className="bg-white shadow-sm border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link 
                to={type === 'analysis' ? '/analysis' : '/dashboard'}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 ml-2" />
                العودة
              </Link>
              <div className="mr-6">
                <h1 className="text-xl font-semibold text-gray-900">{reportData.title}</h1>
                <p className="text-sm text-gray-600">{reportData.subtitle}</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={printReport}
                className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Printer className="h-4 w-4 ml-2" />
                طباعة
              </button>
              <button
                onClick={generatePDF}
                className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Download className="h-4 w-4 ml-2" />
                تحميل PDF
              </button>
              <button className="flex items-center bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors">
                <Share2 className="h-4 w-4 ml-2" />
                مشاركة
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:px-0 print:py-0">
        <div ref={reportRef} className="bg-white rounded-lg shadow-lg print:shadow-none print:rounded-none">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-t-lg print:rounded-none">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-2 rounded-lg ml-3">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">منصة نابت</h1>
                    <p className="text-primary-100">منصة تحليل الأراضي الذكية</p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">{reportData.title}</h2>
                <p className="text-primary-100">{reportData.subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-primary-100">تاريخ التقرير</p>
                <p className="text-xl font-semibold">{new Date().toLocaleDateString('ar-SA')}</p>
              </div>
            </div>
          </div>

          {/* Report Body */}
          <div className="p-8">
            {type === 'analysis' && (
              <>
                {/* Basic Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 ml-2 text-primary-600" />
                    معلومات أساسية
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">الموقع:</span>
                        <span className="font-medium">{reportData.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">المساحة:</span>
                        <span className="font-medium">{reportData.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">تاريخ التحليل:</span>
                        <span className="font-medium">{reportData.date}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">الإحداثيات:</span>
                        <span className="font-medium">{reportData.coordinates}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">نوع التربة:</span>
                        <span className="font-medium">{reportData.soilType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">المناخ:</span>
                        <span className="font-medium">{reportData.climate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analysis Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 ml-2 text-primary-600" />
                    نتائج التحليل
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-900 mb-1">قابلية التشجير</h4>
                      <p className="text-2xl font-bold text-green-600">{reportData.suitabilityScore}%</p>
                      <p className="text-sm text-green-700">عالية الجودة</p>
                    </div>
                    
                    <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 text-center">
                      <Target className="h-8 w-8 text-secondary-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-secondary-900 mb-1">الأولوية</h4>
                      <p className="text-xl font-bold text-secondary-600">{reportData.priority}</p>
                      <p className="text-sm text-secondary-700">يُنصح بالتدخل السريع</p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                      <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-orange-900 mb-1">مستوى المخاطر</h4>
                      <p className="text-xl font-bold text-orange-600">{reportData.riskLevel}</p>
                      <p className="text-sm text-orange-700">مراقبة دورية مطلوبة</p>
                    </div>
                  </div>
                </div>

                {/* Environmental Conditions */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="h-5 w-5 ml-2 text-primary-600" />
                    الظروف البيئية
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <Droplets className="h-6 w-6 text-blue-600 ml-4" />
                      <div>
                        <p className="font-medium text-gray-900">توفر المياه</p>
                        <p className="text-blue-700">{reportData.waterAvailability}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <Thermometer className="h-6 w-6 text-orange-600 ml-4" />
                      <div>
                        <p className="font-medium text-gray-900">المناخ</p>
                        <p className="text-orange-700">{reportData.climate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Leaf className="h-5 w-5 ml-2 text-primary-600" />
                    التوصيات
                  </h3>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-900 mb-4">النباتات المناسبة</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {reportData.recommendations.map((plant, index) => (
                        <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                          <Leaf className="h-4 w-4 text-green-600 ml-2" />
                          <span className="text-sm font-medium text-gray-900">{plant}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">نوع التدخل المقترح</h5>
                      <p className="text-gray-700">{reportData.interventionType}</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === 'dashboard' && (
              <>
                {/* Dashboard Summary */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ملخص الفترة</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">الفترة:</span>
                        <span className="font-medium">{reportData.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">إجمالي المساحة المحللة:</span>
                        <span className="font-medium">{reportData.totalAnalyzed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">التنبيهات النشطة:</span>
                        <span className="font-medium">{reportData.activeAlerts}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">الحملات النشطة:</span>
                        <span className="font-medium">{reportData.activeCampaigns}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">المتطوعون المشاركون:</span>
                        <span className="font-medium">{reportData.volunteers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">معدل النجاح:</span>
                        <span className="font-medium">{reportData.successRate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">مؤشرات الأداء</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">معدل نجاح التشجير</span>
                      <span className="font-semibold text-green-600">{reportData.successRate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: reportData.successRate}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">كفاءة استخدام المياه</span>
                      <span className="font-semibold text-blue-600">{reportData.waterEfficiency}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: reportData.waterEfficiency}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">مشاركة المجتمع</span>
                      <span className="font-semibold text-purple-600">{reportData.communityEngagement}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: reportData.communityEngagement}}></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Footer */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div>
                  <p>تم إنشاء هذا التقرير بواسطة منصة نابت</p>
                  <p>منصة تحليل الأراضي الذكية - المملكة العربية السعودية</p>
                </div>
                <div className="text-right">
                  <p>تاريخ الإنشاء: {new Date().toLocaleDateString('ar-SA')}</p>
                  <p>الوقت: {new Date().toLocaleTimeString('ar-SA')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:block {
            display: block !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:px-0 {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ReportPage;